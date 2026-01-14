import { setAccessToken, clearAccessToken } from './token'

export async function refreshAccessToken() {
  const res = await fetch('/api/auth/refresh', {
    method: 'POST',
    credentials: 'include', // 🔑 sends refresh cookie
  })

  if (!res.ok) {
    clearAccessToken()
    throw new Error('Refresh failed')
  }

  const data = await res.json()
  setAccessToken(data.accessToken)

  return data.accessToken
}
