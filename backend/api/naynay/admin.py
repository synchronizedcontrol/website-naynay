from django.contrib import admin
from .models import Person, Resume, Blog, WeekTip
from .address import Address
# Register your models here.


class AddressInLine(admin.StackedInline):
    model = Address


class ResumeInLine(admin.TabularInline):
    model = Resume
    extra = 1


class PersonAdmin (admin.ModelAdmin):
    inlines = [ResumeInLine]


class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_date', 'quote')
    list_filter = ['created_date']
    search_fields = ['title']

    def get_queryset(self, request):
        """
        Filter the objects displayed in the blog list to
        only show blogs, not week tips
        """
        qs = super(BlogAdmin, self).get_queryset(request)
        return qs.filter(weektip__isnull=True)


admin.site.register(Person, PersonAdmin)
admin.site.register(Blog, BlogAdmin)
admin.site.register(WeekTip)
admin.site.register(Address)
