from django.db import models
from django.core.exceptions import ValidationError
from django.db.models.signals import pre_save
from django.utils.translation import gettext_lazy as _
from django.dispatch import receiver
import os

# Create your models here.

def user_details(value):
    allowed_extensions = ['.png', '.jpg', '.jpeg']
    ext = str(value).lower().split('.')[-1]
    if not ext in allowed_extensions:
        raise ValidationError(
            _('Invalid file format. Only PNG and JPG/JPEG are allowed.'),
            code='invalid_image'
        )
    