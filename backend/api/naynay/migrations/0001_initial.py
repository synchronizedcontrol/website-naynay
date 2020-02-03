# Generated by Django 2.2.3 on 2019-07-08 13:48

from django.db import migrations, models
import django.db.models.deletion
import django_countries.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.AutoField(auto_created=True,
                                        primary_key=True, serialize=False, verbose_name='ID')),
                ('street', models.CharField(max_length=75)),
                ('house_number', models.CharField(max_length=10)),
                ('zip_code', models.CharField(max_length=10)),
                ('country', django_countries.fields.CountryField(max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True,
                                        primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('middle_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('created_date', models.DateTimeField(verbose_name='date created')),
                ('address', models.OneToOneField(
                    on_delete=django.db.models.deletion.CASCADE, to='naynay.Address')),
            ],
        ),
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.AutoField(auto_created=True,
                                        primary_key=True, serialize=False, verbose_name='ID')),
                ('employ_start_date', models.DateField(
                    verbose_name='date employment started')),
                ('employ_end_date', models.DateField(
                    verbose_name='date employment ended')),
                ('position', models.CharField(max_length=100)),
                ('experience', models.TextField(max_length=500)),
                ('person', models.ForeignKey(
                    on_delete=django.db.models.deletion.CASCADE, to='naynay.Person')),
            ],
        ),
    ]
