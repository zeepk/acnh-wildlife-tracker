# Generated by Django 3.0.4 on 2020-04-26 02:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0002_bug_fish'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Bug',
        ),
        migrations.DeleteModel(
            name='Fish',
        ),
    ]
