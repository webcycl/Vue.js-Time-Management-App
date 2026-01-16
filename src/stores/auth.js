import { reactive } from "vue"

export const authState = reactive({
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")),
})

export function setAuth(data) {
  authState.token = data.access_token
  authState.user = data.user

  localStorage.setItem("token", data.access_token)
  localStorage.setItem("user", JSON.stringify(data.user))
}

export function clearAuth() {
  authState.token = null
  authState.user = null

  localStorage.removeItem("token")
  localStorage.removeItem("user")
}
