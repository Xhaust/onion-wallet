import { apiFetch } from "../../services/api";

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