from rest_framework import routers
from .api import LeadViewSet, ProgressViewSet

router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')
router.register('api/progress', ProgressViewSet, 'progress')

urlpatterns = router.urls