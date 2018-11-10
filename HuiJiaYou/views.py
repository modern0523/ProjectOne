import random
import uuid

from django.db.models import Sum
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from HuiJiaYou.models import User, Lunbo, Grouplunbo, AddCart


def index(request):
    #cookie
    # get_del = request.COOKIES.get('tel')

    #session
    token = request.session.get('token')


    #轮播图数据
    wheels = Lunbo.objects.all()

    #分组图数据
    groups = Grouplunbo.objects.all()

    # 对购物车商品数量求和
    sum_num = AddCart.objects.aggregate(Sum('number'))

    data = {}
    data['wheels'] = wheels
    data['groups'] = groups
    data['sum'] = sum_num['number__sum']
    # 在还未登录注册下，是没有token的,接下来判断
    if token:
        user = User.objects.get(token=token)
        data['get_del'] = user.tel
        data['status'] = 1
    else:
        data['status'] = 0

    return render(request,'index.html',context=data)


def login(request):
    if request.method=='GET':
        return render(request,'login.html')
    elif request.method=='POST':
        login_tel = request.POST.get('login_tel')
        login_password = request.POST.get('login_password')

        #验证数据库
        users = User.objects.filter(tel=login_tel).filter(password=login_password)

        if users.exists():
            user = users.first()

            #更新token
            user.token = str(uuid.uuid5(uuid.uuid4(),'login'))
            user.save()


            request.session['token']=user.token
            return redirect('HuiJiaYou:index')
        else:
            return render(request,'404.html')




    # return render(request,'login.html')


def loginout(request):
    # cookie
    # response = redirect('HuiJiaYou:index')
    # response.delete_cookie('tel')
    # return response

    #session
    response = redirect('HuiJiaYou:index')
    response.delete_cookie('sessionid')
    return response

def register(request):
    if request.method=='GET':
        return render(request,'register.html')
    elif request.method=='POST':

        tel = request.POST.get('tel')
        password = request.POST.get('password')
        # print(tel,password)

        user = User()

        user.tel = tel
        user.password = password
        user.token = str(uuid.uuid5(uuid.uuid4(),'register'))
        user.save()

        #cookie
        # response = redirect('HuiJiaYou:index')
        # response.set_cookie('tel',tel)
        # return response

        #session
        request.session['token']=user.token
        # request.session.set_expiry(60)
        return redirect('HuiJiaYou:index')


def goods(request,typeid):

    token = request.session.get('token')
    showgoods = Grouplunbo.objects.filter(typeid=typeid)

    user = User.objects.filter(token=token).first()
    tel =  user.tel
    #对购物车商品数量求和
    sum_num = AddCart.objects.aggregate(Sum('number'))
    # print(sum_num)   #{'number__sum': 20}

    goodsdata = {
        'showgoods':showgoods,
        'goodsid':typeid,
        'sum':sum_num['number__sum'],
        'tel':tel,
    }
    if token:
        goodsdata['status'] = 1
    else:
        goodsdata['status'] = 0



    return render(request,'goods.html',context=goodsdata)



def showCart(request):
    #获得登录用户的购物车
    token = request.session.get('token')
    user = User.objects.filter(token=token).first()
    tel = user.tel
    carts = AddCart.objects.filter(user=user)


    # goods = Grouplunbo.objects.filter()
    if token:
        status = 1
    else:
        status = 0
    #购物车总数
    sum_num = AddCart.objects.aggregate(Sum('number'))
    data = {
        'carts':carts,
        'num':sum_num['number__sum'],
        'status':status,
        'tel':tel,
    }

    return render(request,'showCart.html',context=data)


def addcart(request):
    goodsid = request.GET.get('goodsid')
    token = request.session.get('token')

    #根据token获取用户
    user = User.objects.get(token=token)

    #根据goodsid获取商品
    goods = Grouplunbo.objects.filter(typeid=goodsid).first()

    #用来判断用户购物车里到底有没有商品
    carts = AddCart.objects.filter(user=user).filter(group_goods=goods)
    responseData = {}
    if carts.exists():
        cart = carts.first()
        cart.number = cart.number + 1
        cart.save()
        responseData['number'] = cart.number
    else:
        cart = AddCart()
        cart.user = user
        cart.group_goods = goods
        cart.number = 1
        cart.save()
        responseData['number'] = cart.number

    #  对购物车商品数量求和(求和应该要在数据库数据更新之后)
    sum_num = AddCart.objects.aggregate(Sum('number'))
    # sum_num = {'number__sum': 20}
    responseData['sum'] = sum_num['number__sum']

    return JsonResponse(responseData)


def subcart(request):
    goodsid = request.GET.get('goodsid')
    token = request.session.get('token')

    # 根据token获取用户
    user = User.objects.get(token=token)

    # 根据goodsid获取商品
    goods = Grouplunbo.objects.filter(typeid=goodsid).first()

    # 用来判断用户购物车里到底有没有商品
    carts = AddCart.objects.filter(user=user).filter(group_goods=goods)
    responseData = {}

    cart = carts.first()
    cart.number = cart.number - 1

    cart.save()
    responseData['number'] = cart.number


    #  对购物车商品数量求和(求和应该要在数据库数据更新之后)
    sum_num = AddCart.objects.aggregate(Sum('number'))
    # sum_num = {'number__sum': 20}
    responseData['sum'] = sum_num['number__sum']

    return JsonResponse(responseData)


def onecheck(request):
    cartid = request.GET.get('cartid')
    cart = AddCart.objects.get(pk=cartid)
    cart.isselect = not cart.isselect
    cart.save()
    data = {
        'msg':'选中状态改变',
        'status':1,
        'isselect':cart.isselect
    }

    return JsonResponse(data)


def morecheck(request):
    isselect = request.GET.get('isselect')
    if isselect=="true":
        isselect = True
    if isselect=="false":
        isselect = False

    #知道状态之后，要拿到对应用户的购物车数据，然后进行遍历，
    #改变数据库购物车的选中状态
    token = request.session.get('token')
    user = User.objects.get(token=token)
    carts = AddCart.objects.filter(user=user)
    for cart in carts:
        cart.isselect = isselect
        cart.save()


    return JsonResponse({'msg':'全选状态改变','status':1})


def delcartgoods(request,cartgoodsid):
    cart = AddCart.objects.get(pk=cartgoodsid)
    cart.delete()

    return redirect('HuiJiaYou:showCart')