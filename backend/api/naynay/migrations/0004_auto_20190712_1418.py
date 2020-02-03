# Generated by Django 2.2.3 on 2019-07-12 14:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('naynay', '0003_auto_20190712_1010'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='address',
            name='address_owner',
        ),
        migrations.AlterField(
            model_name='person',
            name='address',
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to='naynay.Address'),
        ),
        migrations.DeleteModel(
            name='AddressOwner',
        ),
    ]