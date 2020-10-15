from django.db import models
from django.template.defaultfilters import slugify

# Create your models here.
class Movies(models.Model):
    name = models.CharField(max_length=50, blank=False, null=False)
    slug = models.SlugField()
    year_released = models.CharField(max_length=4)
    poster = models.ImageField(upload_to='posters', blank=True, null=True)
    watched = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "movies"
    
    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        slug = slugify(self.name)

        self.slug = slug

        super().save(*args, **kwargs)

    