# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-11-09 07:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HuiJiaYou', '0007_addcart'),
    ]

    operations = [
        migrations.AddField(
            model_name='addcart',
            name='addid',
            field=models.CharField(default=0, max_length=10),
        ),
    ]
