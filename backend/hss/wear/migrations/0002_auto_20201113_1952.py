# Generated by Django 2.2.7 on 2020-11-13 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wear', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userclothes',
            name='color',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='usercoordi',
            name='color',
            field=models.CharField(blank=True, max_length=10),
        ),
    ]
