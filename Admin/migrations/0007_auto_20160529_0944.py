# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0006_auto_20160528_1456'),
    ]

    operations = [
        migrations.AlterField(
            model_name='companybills',
            name='invoice_date',
            field=models.DateField(verbose_name=datetime.date(2016, 5, 29)),
        ),
        migrations.AlterField(
            model_name='galleryimages',
            name='uploaded_at',
            field=models.DateTimeField(default=datetime.datetime(2016, 5, 29, 9, 44, 54, 369897)),
        ),
        migrations.AlterField(
            model_name='stockdetails',
            name='create_date',
            field=models.DateTimeField(default=datetime.datetime(2016, 5, 29, 9, 44, 54, 358919)),
        ),
    ]
