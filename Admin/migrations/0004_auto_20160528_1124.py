# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0003_auto_20160528_1119'),
    ]

    operations = [
        migrations.AddField(
            model_name='companybills',
            name='is_deleted',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='galleryimages',
            name='uploaded_at',
            field=models.DateTimeField(default=datetime.datetime(2016, 5, 28, 11, 24, 45, 92613)),
        ),
        migrations.AlterField(
            model_name='stockdetails',
            name='create_date',
            field=models.DateTimeField(default=datetime.datetime(2016, 5, 28, 11, 24, 45, 86092)),
        ),
    ]
