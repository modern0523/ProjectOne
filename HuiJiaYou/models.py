from django.db import models

# Create your models here.
class User(models.Model):
    tel = models.CharField(max_length=256)
    password = models.CharField(max_length=256)


class Lunbo(models.Model):
    img = models.CharField(max_length=100)
    trackid = models.CharField(max_length=10)
    class Meta:
        db_table='index_lunbo'

class Grouplunbo(models.Model):
    img = models.CharField(max_length=100)
    name = models.CharField(max_length=256)
    price = models.CharField(max_length=10)
    oldprice = models.CharField(max_length=10)
    typeid = models.CharField(max_length=8,default=0)
    class Meta:
        db_table='group_lunbo'