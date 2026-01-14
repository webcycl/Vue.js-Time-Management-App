import { authFetch } from '@/auth/authFetch'

export async function getHealth() {
  const res = await authFetch('/api/health', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-Tenant-Id': 'development',
      'X-Request-Id': crypto.randomUUID(),
    },
  })

  if (!res.ok) {
    throw new Error(`Health check failed (${res.status})`)
  }

  return res.json()
}
