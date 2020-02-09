from django.db import models


class User(models.Model):
    full_name    = models.CharField("Fullname", max_length=150)
    username    = models.CharField("Username", max_length=50)
    password    = models.CharField("Password",  max_length=50)
    email           = models.EmailField("Email Address", max_length=150)
    position      = models.CharField("Position", max_length=50)
