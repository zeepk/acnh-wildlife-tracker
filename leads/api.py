from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer, ProgressSerializer


class LeadViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ProgressViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ProgressSerializer

    def get_queryset(self):
        return self.request.user.progress.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)