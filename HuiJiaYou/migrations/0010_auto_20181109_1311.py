# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-11-09 13:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HuiJiaYou', '0009_remove_addcart_addid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addcart',
            name='isselect',
            field=models.BooleanField(default=False),
        ),
    ]