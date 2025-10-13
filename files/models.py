from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils import timezone

class Animal(models.Model):
    """Animal model (renamed from Pets)"""
    animal_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    breed = models.CharField(max_length=50)
    species = models.CharField(max_length=50)
    age = models.IntegerField(help_text="Age in months")
    sex = models.CharField(
        max_length=1,
        choices=[('m','Male'), ('f','Female'), ('u','Unknown')]
    )

    def get_age_display(self):
        """Convert months to years format"""
        if self.age < 12:
            return f"Less than 1 year"
        else:
            years = self.age / 12
            if years == int(years):
                # Exact years (e.g., 24 months = 2 years)
                return f"{int(years)} year{'s' if int(years) != 1 else ''}"
            else:
                # Decimal years (e.g., 18 months = 1.5 years)
                return f"{years:.1f} years"
    
    def get_age_in_years(self):
        """Get age as decimal years"""
        return round(self.age / 12, 1)
    
    
    size = models.CharField(
        max_length=20,
        choices=[('small','Small'), ('medium','Medium'), ('large','Large')]
    )
    
    adoption_fee = models.DecimalField(max_digits=10, decimal_places=2)
    date_added = models.DateField(auto_now_add=True)
    admin_id_created = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    photo = models.ImageField(upload_to="animal_images/", blank=True, null=True)
    is_available = models.BooleanField(default=True)
    suburb = models.CharField(max_length=100, default='Unknown')
    state = models.CharField(
        max_length=20,
        choices=[('nsw','NSW'), ('act','ACT'), ('vic','VIC'), ('qld', 'QLD')]
    )
    status = models.CharField(
        default='available', 
        max_length=20,
        choices=[('available','Available'), ('pending','Pending'), ('adopted','Adopted'), ('removed', 'Removed')]
    )

    def __str__(self):
        return f"{self.name} - {self.breed}"