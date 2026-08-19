const url = import.meta.env.VITE_API_URL;

function getCsrfToken(): string {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken="))
    ?.split("=")[1] ?? "";
}

export async function apiFetch(
  path: string,
  options?: RequestInit,
) {
  const headers = new Headers(options?.headers);
  headers.set("Content-Type", "application/json");
  const method = options?.method?.toUpperCase();
  
  if (method && !["GET", "HEAD", "OPTIONS"].includes(method)) {
    headers.set("X-CSRFToken", getCsrfToken());
  }

  return fetch(`${url}${path}`, {
    ...options,
    headers,
    credentials: "include",
  });
}