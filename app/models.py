
# Django
from django.db import models
from django.utils.text import slugify


# Page Object
class Page(models.Model):
    """Page model. This defines the data for a generic page."""

    # Title of page
    title = models.TextField()

    # Relative url of page. Like '/' or '/my-page'/.
    url = models.TextField(blank=True, null=True)

    # Content of page in React-Page json format.
    content = models.JSONField(blank=True, null=True)

    class Meta:
        verbose_name = "Page"
        verbose_name_plural = "Pages"

    def __str__(self):
        return self.title 

    def save(self, *args, **kwargs):
        if self.url != '/':
            self.url = f"/{slugify(self.url)}/"
        super(Page, self).save(*args, **kwargs)

    def get_pages_as_dict():
        """Returns list of page objects as dictionaries."""
        pages = []
        for page_object in Page.objects.all():
            page = {}
            page['title'] = page_object.title
            page['url'] = page_object.url
            page['content'] = page_object.content
            pages.append(page)
        return pages


# Image Object
class Image(models.Model):
    """Image model. Defines the model for images."""

    # Name of the image
    name = models.TextField()

    # Description or alternate text for the image
    alt = models.TextField(blank=True, null=True)

    # Image file. File will be saved to MEDIA_ROOT / uploads / YEAR / MONTH / DAY
    image = models.ImageField(upload_to ='uploads/images')

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        verbose_name = "Image"
        verbose_name_plural = "Images"

    def __str__(self):
        return self.name 


# File Object
class File(models.Model):
    """File model. Provides a file manager for user-uploaded files."""

    # Name of the file
    name = models.TextField()

    # Description or alternate text for the file
    description = models.TextField(blank=True, null=True)

    # Image file. File will be saved to MEDIA_ROOT
    file = models.FileField(upload_to ='uploads/files')

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        verbose_name = "File"
        verbose_name_plural = "Files"

    def __str__(self):
        return self.name 



## Other
# class Author(models.Model):
#     name = models.CharField("name", max_length=100)
#     email = models.EmailField("email", max_length=100, blank=True, default="")

#     class Meta:
#         verbose_name = "Author"
#         verbose_name_plural = "Authors"


# class Tag(models.Model):
#     name = models.CharField("name", max_length=100)
#     parent = models.ForeignKey(
#         "self", verbose_name="parent", blank=True, null=True, on_delete=models.CASCADE
#     )
#     published = models.BooleanField("published", default=True)

#     class Meta:
#         verbose_name = "Tag"
#         verbose_name_plural = "Tags"


# class Post(models.Model):
#     title = models.CharField("title", max_length=100)
#     teaser = models.TextField("teaser")
#     body = models.TextField("body")
#     views = models.IntegerField("views", default=0)
#     average_note = models.FloatField("average_note", null=True)
#     commentable = models.BooleanField("commentable", default=True)
#     published_at = models.DateField("published_at", blank=True)
#     category = models.CharField("category", max_length=100, blank=True)
#     subcategory = models.CharField("subcategory", max_length=100, blank=True)
#     tags = models.ManyToManyField(Tag, verbose_name="tags", related_name="tags", blank=True)
#     backlinks = models.JSONField(
#         'backlinks',
#         blank=True,
#         default=list,
#     )
#     notifications = models.JSONField(
#         'notifications',
#         blank=True,
#         default=list,
#     )
#     authors = models.JSONField(
#         'authors',
#         blank=True,
#         default=list,
#     )

#     class Meta:
#         verbose_name = "Post"
#         verbose_name_plural = "Posts"


# class Comment(models.Model):
#     post = models.ForeignKey(Post, verbose_name="post", on_delete=models.CASCADE)
#     body = models.TextField("body")
#     created_at = models.DateField("created_at", auto_now_add=True, blank=True)
#     author = models.ForeignKey(Author, verbose_name="author", on_delete=models.CASCADE)

#     class Meta:
#         verbose_name = "Comment"
#         verbose_name_plural = "Comments"
