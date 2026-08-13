from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegistrationSerializer

@api_view(['POST'])
def registration_view(request):
    serializer = RegistrationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()

    return Response(
        {
            'id': user.id,
            'username': user.username,
            'email': user.email
        },
        status=status.HTTP_201_CREATED
    )
    