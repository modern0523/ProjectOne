# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-11-06 08:53
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('HuiJiaYou', '0006_user_token'),
    ]

    operations = [
        migrations.CreateModel(
            name='AddCart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField()),
                ('isselect', models.BooleanField(default=True)),
                ('group_goods', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='HuiJiaYou.Grouplunbo')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='HuiJiaYou.User')),
            ],
            options={
                'db_table': 'addCart',
            },
        ),
    ]
