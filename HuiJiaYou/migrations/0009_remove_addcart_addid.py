# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-11-09 08:28
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HuiJiaYou', '0008_addcart_addid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='addcart',
            name='addid',
        ),
    ]
