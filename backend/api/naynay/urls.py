from django.urls import path
from naynay import views

urlpatterns = [
    path('get-persons', views.person_list),
    path('get-blogs', views.blog_list),
    path('latest-weektip', views.latest_weektip),
    path('get-persons/id/<int:pk>', views.person_item),
]
