from django.shortcuts import render

# Create your views here.
def index(request):

    return render(request,'index.html')


def login(request):

    return render(request,'login.html')


def register(request):

    return render(request,'register.html')


def goods(request):

    return render(request,'goods.html')


def showCart(request):

    return render(request,'showCart.html')