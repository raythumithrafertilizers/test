# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0006_auto_20160528_1456'),
    ]

    operations = [
        migrations.AddField(
            model_name='customerpayments',
            name='added_by',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='companybills',
            name='invoice_date',
            field=models.DateField(verbose_name=datetime.date(2016, 5, 29)),
        ),
        migrations.AlterField(
            model_name='galleryimages',
            name='uploaded_at',
            field=models.DateTimeField(default=datetime.datetime(2016, 5, 29, 10, 38, 10, 276906)),
        ),
        migrations.AlterField(
            model_name='stockdetails',
            name='create_date',
            field=models.DateTimeField(default=datetime.datetime(2016, 5, 29, 10, 38, 10, 270313)),
        ),
    ]
