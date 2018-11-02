from django.conf.urls import url

from HuiJiaYou import views

urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^login/$',views.login,name='login'),
    url(r'^register/$',views.register,name='register'),
    url(r'^loginout/$',views.loginout,name='loginout'),
    url(r'^goods/(\d+)/$',views.goods,name='goods'),
    url(r'^showCart/$',views.showCart,name='showCart'),
]