from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=12)
    content = models.TextField()
    image_url = models.TextField()
    avatar = models.TextField()

    def __str__(self):
        return self.title
