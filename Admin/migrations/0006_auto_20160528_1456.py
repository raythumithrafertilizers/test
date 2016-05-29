# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0005_auto_20160528_1442'),
    ]

    operations = [
        migrations.AlterField(
            model_name='galleryimages',
            name='uploaded_at',
            field=models.DateTimeField(default=datetime.datetime(2016, 5, 28, 14, 56, 58, 313976)),
        ),
        migrations.AlterField(
            model_name='stockdetails',
            name='create_date',
            field=models.DateTimeField(default=datetime.datetime(2016, 5, 28, 14, 56, 58, 307337)),
        ),
    ]
