# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0002_auto_20160524_2310'),
    ]

    operations = [
        migrations.AddField(
            model_name='stockdetails',
            name='is_deleted',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='companybills',
            name='invoice_date',
            field=models.DateField(verbose_name=datetime.date(2016, 5, 28)),
        ),
        migrations.AlterField(
            model_name='galleryimages',
            name='uploaded_at',
            field=models.DateTimeField(default=datetime.datetime(2016, 5, 28, 11, 19, 55, 998532)),
        ),
        migrations.AlterField(
            model_name='stockdetails',
            name='create_date',
            field=models.DateTimeField(default=datetime.datetime(2016, 5, 28, 11, 19, 55, 992070)),
        ),
    ]
