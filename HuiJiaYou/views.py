import random
import uuid

from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from HuiJiaYou.models import User, Lunbo, Grouplunbo


def index(request):
    #cookie
    # get_del = request.COOKIES.get('tel')

    #session
    token = request.session.get('token')


    #轮播图数据
    wheels = Lunbo.objects.all()

    #分组图数据
    groups = Grouplunbo.objects.all()

    data = {}
    data['wheels'] = wheels
    data['groups'] = groups
    # 在还未登录注册下，是没有token的,接下来判断
    if token:
        user = User.objects.get(token=token)
        data['get_del'] = user.tel


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
    showgoods = Grouplunbo.objects.filter(typeid=typeid)
    goodsdata = {
        'showgoods':showgoods
    }

    return render(request,'goods.html',context=goodsdata)


def showCart(request):

    return render(request,'showCart.html')


