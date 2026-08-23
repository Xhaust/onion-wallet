from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.contrib.auth import authenticate, login, logout
from .serializers import RegistrationSerializer, LoginSerializer, UserSerializer

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
    
@api_view(['POST'])
def login_view(request):
    serializer = LoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = authenticate(
        request, 
        username=serializer.validated_data['username'],
        password=serializer.validated_data['password']
    )

    if user is None:
        return Response(
            {
                'detail': 'Invalid credentials.'
            },
            status=status.HTTP_401_UNAUTHORIZED
        )

    login(request, user)

    return Response(
        {
            'detail': 'Login successful.'
        },
        status=status.HTTP_200_OK
    )

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me_view(request):
    serializer = UserSerializer(request.user)
    return Response(
        serializer.data,
        status=status.HTTP_200_OK
    )

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    logout(request)
    return Response(
        {
            'detail': 'Logout successful.'
        },
        status=status.HTTP_200_OK
    )