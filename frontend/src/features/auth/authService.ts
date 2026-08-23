import { apiFetch } from "../../services/api";

export interface UserData {
  id: number;
  username: string;
  email: string;
}

export async function getUserData(): Promise<UserData> {
  const response = await apiFetch("/users/me/", {
    method: "GET"
  });
  
  if (!response.ok) {
    throw new Error("Couldn't retrieve data");
  }

  return response.json();
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  password_confirm: string;
}

export async function register(data: RegisterData) {
  const response = await apiFetch("/users/register/", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
}

interface LoginData {
  username: string;
  password: string;
}

export async function login(data: LoginData) {
  const response = await apiFetch("/users/login/", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
}

export async function logout() {
  const csrfToken = document.cookie.match(/csrftoken=([^;]+)/)?.[1] ?? '';
  const response = await apiFetch("/users/logout/", {
    method: "POST",
    headers: {
      'X-CSRFToken': csrfToken,
    }
  })

  if (!response.ok) {
    throw new Error("Logout failed");
  }

  localStorage.removeItem('csrfToken');
}