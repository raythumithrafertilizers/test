# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0007_auto_20160529_1038'),
    ]

    operations = [
        migrations.AddField(
            model_name='billing',
            name='added_by',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='companybills',
            name='added_by',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='customers',
            name='added_by',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='stockdetails',
            name='added_by',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='galleryimages',
            name='uploaded_at',
            field=models.DateTimeField(default=datetime.datetime(2016, 5, 29, 10, 43, 53, 169928)),
        ),
        migrations.AlterField(
            model_name='stockdetails',
            name='create_date',
            field=models.DateTimeField(default=datetime.datetime(2016, 5, 29, 10, 43, 53, 163187)),
        ),
    ]
