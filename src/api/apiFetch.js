export async function apiFetch(url, options = {}) {
  const token = localStorage.getItem("accessToken")

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  })

  if (!res.ok) {
    const error = new Error("API Error")
    error.status = res.status
    error.body = await res.json().catch(() => null)

    // 🔥 redirect only for fatal errors
    if (res.status >= 500) {
      window.location.href = "/error"
    }

    throw error
  }

  return res.json()
}
