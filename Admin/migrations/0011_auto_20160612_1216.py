# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0010_auto_20160529_1054'),
    ]

    operations = [
        migrations.AlterField(
            model_name='billing',
            name='month',
            field=models.CharField(default=b'June', max_length=100),
        ),
        migrations.AlterField(
            model_name='companybills',
            name='invoice_date',
            field=models.DateField(verbose_name=datetime.date(2016, 6, 12)),
        ),
        migrations.AlterField(
            model_name='galleryimages',
            name='uploaded_at',
            field=models.DateTimeField(default=datetime.datetime(2016, 6, 12, 12, 16, 14, 37594)),
        ),
        migrations.AlterField(
            model_name='stockdetails',
            name='create_date',
            field=models.DateTimeField(default=datetime.datetime(2016, 6, 12, 12, 16, 14, 30842)),
        ),
        migrations.AlterField(
            model_name='stockdetails',
            name='month',
            field=models.CharField(default=b'June', max_length=100),
        ),
    ]
