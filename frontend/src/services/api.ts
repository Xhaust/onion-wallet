const url = import.meta.env.VITE_API_URL;

export async function apiFetch(
  path: string,
  options?: RequestInit,
) {
  return fetch(`${url}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    credentials: "include",
  });
}