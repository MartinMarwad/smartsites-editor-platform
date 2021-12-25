from django.shortcuts import render

# Create your views here.

def index(request):
    context = {
        'component': 'App',
        'props': {
            'env': 'Django',
        },
        'title': 'Django + React',
    }
    return render(request, 'index.html', context)
