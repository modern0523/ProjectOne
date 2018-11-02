import random

from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from HuiJiaYou.models import User, Lunbo, Grouplunbo


def index(request):
    #cookie
    # get_del = request.COOKIES.get('tel')

    #session
    get_del = request.session.get('tel')

    #轮播图数据
    wheels = Lunbo.objects.all()

    #分组图数据
    groups = Grouplunbo.objects.all()

    data = {
        'get_del':get_del,
        'wheels':wheels,
        'groups':groups,
    }

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

            request.session['tel']=login_tel
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
        user.save()

        #cookie
        # response = redirect('HuiJiaYou:index')
        # response.set_cookie('tel',tel)
        # return response

        #session
        request.session['tel']=tel
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


