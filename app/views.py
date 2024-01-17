from django.shortcuts import render, redirect
from django.contrib.auth import authenticate as default_authenticate, login as LoginUser, logout as LogoutUser
from django.contrib.auth.models import User as RegisteredUsers
from django.contrib.auth.views import LoginView

import time
import threading


# Create your views here.


GLOBAL_USER = ""



def check_method(req, type:str = "GET"):
    if req.method == type:
        return True 
    else: 
        return send_bad_request(req)


def check_user(req):
    if req.user.username == "" or req.user.username == None:
        return redirect('/logout/')
    else: 
        return True
    




def helper_username():
    global GLOBAL_USER
    time.sleep(2.5)
    GLOBAL_USER = ""


#======================================================================
#======================================================================


# @/
def user_check(req):
    check_method(req)
    return render(req,"landing.html",{})





# AUTHENTICATION ==============
    
# @/register/
def register(req):
    global GLOBAL_USER

    if req.method == "POST":
            
            username = req.POST.get("username")
            fullname = req.POST.get("fullname")
            email = req.POST.get("email")
            password = req.POST.get("password")

            LogoutUser(req)


            # check if this User already exists or not
            if RegisteredUsers.objects.filter(username=username).exists() or RegisteredUsers.objects.filter(email=email).exists():
                GLOBAL_USER = username
                thread1 = threading.Thread(target=helper_username)
                thread1.start()
                return redirect('/signin/')
            


            # next create a new user from User models   
            registered_user = RegisteredUsers.objects.create_user(
                                                            username=username,
                                                            first_name=fullname,
                                                            email=email,
                                                            password=password,
                                                            is_superuser=False,
                                                        )
            
            LoginUser(req, registered_user)

            print(f"FULL NAME: {fullname} | PASSWORD: {password} | EMAIL ID: {email}")
            return redirect('/dashboard/')


    elif req.method == "GET":
        return render(req,"auth/register.html",{})
    else:
        return send_bad_request(req)






# @/signin/
def signin(req):
    global GLOBAL_USER

    if req.method == "GET":
        return render(req,"auth/login.html",{
            "username": GLOBAL_USER if GLOBAL_USER!="" else None
        })
    
    elif req.method == "POST":
        username = req.POST.get("username")
        password = req.POST.get("password")

        user = default_authenticate(req, username=username, password=str(password))

        if user is not None:
            LoginUser(req, user)
            return redirect("/dashboard/")
        else:
            return redirect("/logout/")
        
    else:
        return send_bad_request(req)






# @/logout/
def logout(req):
    check_method(req)
    LogoutUser(req)
    return redirect('/')










# DASHBOARD ==============
    
# @/dashboard/
def dashboard(req):
    check_method(req)
    check_user(req)
    return render(req,"home/dashboard.html",{
        "username": req.user.username,
        "fullname": req.user.first_name
    })



# BAD ROUTES ==================


def send_bad_request(req):
    return render(req,"error/error.html",{
        "status_code": 404,
        "error_desc": "The page you are looking for never existed."
    })