from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.core.paginator import Paginator
from django.http import HttpResponse
from .models import User, Animal, AdoptionApplication
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password, ValidationError as PasswordValidationError
from django.contrib import messages
from django.shortcuts import render, redirect, get_object_or_404

from PetRescue.models import Animal, AdoptionApplication

# --- General Pages ---
def home(request):
    return render(request, "index.html")


# --- Auth ---
def login_view(request):
    if request.method == "POST":
        email = request.POST.get("email").lower()
        password = request.POST.get("password")

        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "Successfully logged in!")
            
            # Check if user is admin/staff and redirect accordingly
            if user.is_staff or user.is_superuser:
                return redirect("admin_app:dashboard")
            else:
                return redirect("profile")
        else:
            messages.error(request, "Invalid email or password.")
    return render(request, "loginpage.html")


def logout_view(request):
    logout(request)
    messages.success(request, "Successfully logged out!")
    return redirect("home")


def signup(request):
    if request.method == "POST":
        email = request.POST.get("email").lower()
        password = request.POST.get("user_password")
        confirm_password = request.POST.get("confirm_password")
        first_name = request.POST.get("first_name")
        last_name = request.POST.get("last_name")
        mobile_number = request.POST.get("mobile_number")
        house_number = request.POST.get("house_number")
        street = request.POST.get("street_name")
        suburb = request.POST.get("suburb")
        state = request.POST.get("state")
        postcode = request.POST.get("postcode")

        if password != confirm_password:
            messages.error(request, "Passwords do not match.")
            return render(request, "signup.html")

        if User.objects.filter(email=email).exists():
            messages.error(request, "Email already exists.")
            return render(request, "signup.html")

        user = User.objects.create_user(
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            mobile=mobile_number,
            house_number=house_number,
            street=street,
            suburb=suburb,
            state=state,
            postcode=postcode
        )
        login(request, user)
        messages.success(request, "Account created successfully!")
        return redirect("profile")

    return render(request, "signup.html")


# --- Profile & Applications ---


@login_required
def manageapplications(request):
    if not request.user.is_admin:
        return HttpResponse("Unauthorized", status=401)

    applications = AdoptionApplication.objects.all().order_by("-application_date")

    if request.method == "POST":
        app_id = request.POST.get("application_id")
        action = request.POST.get("action")
        application = get_object_or_404(AdoptionApplication, pk=app_id)

        if action == "approve":
            application.status = "approved"
        elif action == "reject":
            application.status = "rejected"
        application.save()
        messages.success(request, f"Application {application.id} updated to {application.status}.")

    return render(request, "manageapplications.html", {"applications": applications})