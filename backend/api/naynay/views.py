from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from .models import Person, Resume, Blog, WeekTip
from .serializers import PersonSerializer, PersonListSerializer, BlogPostListSerializer, WeekTipSerializer

# Create your views here.


@csrf_exempt
def person_list(request):
    if request.method == 'GET':
        persons = Person.objects.all()
        serializer = PersonListSerializer(persons, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PersonSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def person_item(request, pk):
    try:
        person = Person.objects.get(pk=pk)
    except Person.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = PersonSerializer(person)
        return JsonResponse(serializer.data, safe=False)


def blog_list(request):
    if request.method == 'GET':
        blogPosts = Blog.objects.filter(weektip__isnull=True)
        serializer = BlogPostListSerializer(blogPosts, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        return HttpResponse(status=403)


def latest_weektip(request):
    if request.method == 'GET':
        weekTip = WeekTip.objects.last()
        if not weekTip:
            return JsonResponse({}, safe=False)
        else:
            serializer = WeekTipSerializer(weekTip)
            return JsonResponse(serializer.data, safe=False)
