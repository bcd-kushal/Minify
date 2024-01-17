
from django.contrib import admin
from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static

# importing views
from app import views as app
from site_admin import views as adm 

#----------------------------------------------------------------------

urlpatterns = [
    path('dj-admin/', admin.site.urls),

    # NON-ADMIN =========================
    path('', app.user_check, name='user_check'),
    
    path('dashboard/', app.dashboard, name='dashbaord'),

    # path('analytics/', app.analytics, name='analytics'),


    path('signin/', app.signin, name='signin'),
    path('register/', app.register, name='register'),
    path('logout/', app.logout, name='logout'),

    # path('membership/', app.see_membership, name='see_membership'),

    # path('settings/', app.settings, name='settings'),

    
    
    


    # ADMIN =========================
    # path('admin/', adm.redirect_to_admin, name='admin_redirect'),



    # REST UNDEFINED PATTERNS
    re_path(r'^.*/$', app.send_bad_request, name='bad-route'),

]

urlpatterns += static(settings.MEDIA_URI,document_root=settings.MEDIA_ROOT)