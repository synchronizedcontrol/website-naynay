# Generated by Django 2.2.9 on 2020-01-03 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('naynay', '0006_auto_20200103_1336'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='featuredImage',
            field=models.ImageField(default='blog.jpg', upload_to='blog'),
        ),
        migrations.AddField(
            model_name='blog',
            name='quote',
            field=models.CharField(
                default='It is wise to know when to say NayNay!', max_length=150),
        ),
    ]
