import { getAccessToken, clearAccessToken } from './token'
import { refreshAccessToken } from './refresh'

let isRefreshing = false
let refreshPromise = null

export async function authFetch(url, options = {}) {
  const token = getAccessToken()

  const headers = {
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: 'include', // 🔑 REQUIRED
  })

  if (response.status !== 401) {
    return response
  }

  // ---- 401 HANDLING ----
  if (!isRefreshing) {
    isRefreshing = true
    refreshPromise = refreshAccessToken().finally(() => {
      isRefreshing = false
    })
  }

  try {
    const newToken = await refreshPromise

    const retryHeaders = {
      ...(options.headers || {}),
      Authorization: `Bearer ${newToken}`,
    }

    return fetch(url, {
      ...options,
      headers: retryHeaders,
      credentials: 'include',
    })
  } catch {
    clearAccessToken()
    window.location.href = '/login'
    throw new Error('Session expired')
  }
}
