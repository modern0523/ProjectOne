# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-11-01 03:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HuiJiaYou', '0002_auto_20181031_1232'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lunbo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.CharField(max_length=100)),
                ('trackid', models.CharField(max_length=10)),
            ],
            options={
                'db_table': 'index_lunbo',
            },
        ),
    ]
