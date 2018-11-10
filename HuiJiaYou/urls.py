from django.conf.urls import url

from HuiJiaYou import views

urlpatterns = [
    url(r'^$',views.index,name='index'),
    url(r'^login/$',views.login,name='login'),
    url(r'^register/$',views.register,name='register'),
    url(r'^loginout/$',views.loginout,name='loginout'),
    url(r'^goods/(\d+)/$',views.goods,name='goods'),
    url(r'^showCart/$',views.showCart,name='showCart'),
    url(r'^addcart/$',views.addcart,name='addcart'),
    url(r'^subcart/$',views.subcart,name='subcart'),
    url(r'^onecheck/$',views.onecheck),
    url(r'^morecheck/$',views.morecheck),
    url(r'^delcartgoods/(\d+)/$',views.delcartgoods,name='delcartgoods'),

]