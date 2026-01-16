<template>
  <nav class="sticky top-0 bg-background border-b border-[#e6e8ec] z-20">
    <div class="pr-5 md:pr-10 pl-5 md:pl-10 w-full max-w-[1296px] mx-auto flex justify-between items-center h-16">
      <!-- Logo -->
      <a href="/" class="mr-auto">
        <img src="https://app.vettime.de/_next/static/media/logo-vettime.5428390e.svg" alt="VetTime Logo"
          class="h-6 w-fit" />
      </a>

      <!-- Buttons -->
      <div class="flex items-center gap-2 border">
        <router-link to="/login">
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[13px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 duration-100 border-input hover:text-accent-foreground bg-transparent text-gray-700 border hover:bg-gray-100/50 max-h-8 h-8 px-3.5">
            Login
          </button>
        </router-link>

        <a href="https://vettime.de#kontaktformular" target="_blank">
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[13px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 duration-100 bg-primary text-primary-foreground hover:bg-primary/90 max-h-8 h-8 px-3.5 w-fit">
            Demo buchen
          </button>
        </a>
      </div>
    </div>
  </nav>

  <div class=" bg-background flex flex-col lg:flex-row">
    <!-- Left side: Form -->
    <div class="flex flex-1 justify-center items-center p-6">
      <div class="w-full max-w-md border  text-card-foreground rounded-lg shadow-md p-6">
        <h2 class="text-3xl font-bold text-center mb-6">demo</h2>

        <form class="space-y-4" @submit.prevent="login">
          <div>
            <label for="username" class="block text-sm font-medium mb-1">Benutzername</label>
            <input type="text" id="username" v-model="username" placeholder="Ihr Benutzername"
              class="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              required />
          </div>

          <div class="relative">
            <label for="username" class="block text-sm font-medium mb-1">Passwort</label>

            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password"
              autocomplete="current-password" placeholder="Ihr Passwort"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 pr-10"
              required />

            <button type="button" @click="togglePassword"
              class="absolute top-0 right-0 h-full px-3.5 flex items-center justify-center text-muted-foreground hover:text-foreground focus:outline-none">
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="w-4 h-4">
                <path
                  d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49">
                </path>
                <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143">
                </path>
                <path d="m2 2 20 20"></path>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                <path
                  d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0">
                </path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>

          <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>

          <button type="submit"
            class="w-full py-3 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
            :disabled="loading">
            {{ loading ? 'Anmelden...' : 'Anmelden' }}
          </button>
        </form>
      </div>
    </div>

    <!-- Right side: Image for desktop -->
    <div class="hidden lg:flex flex-1 justify-center items-center -gray-100">
      <img src="https://app.vettime.de/images/undraw_real-time-collaboration_bchs.svg" alt="Collaboration illustration"
        class="w-3/4 " />
    </div>
    
  </div>
       <!-- Footer -->
            <footer class="py-12 bg-[#F8F9FA] border-t border-[#e6e8ec]">
                <div
                    class="pr-5.5 md:pr-10 pl-5.5 md:pl-10 w-full max-w-[1296px] mx-auto flex items-center justify-center">
                    <div class="flex gap-4 w-fit">
                        <a href="https://vettime.de/datenschutz" target="_blank"
                            class="text-xs text-[#667093] hover:text-[#151618]">
                            Datenschutz
                        </a>
                        <div class="w-0.25 h-3.5 bg-[#e6e8ec]"></div>
                        <a href="https://vettime.de/impressum" target="_blank"
                            class="text-xs text-[#667093] hover:text-[#151618]">
                            impressum
                        </a>
                        <div class="w-0.25 h-3.5 bg-[#e6e8ec]"></div>
                        <a href="https://vettime.de/agbs" target="_blank"
                            class="text-xs text-[#667093] hover:text-[#151618]">
                            AGB
                        </a>
                    </div>
                </div>
            </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { setAuth } from "@/stores/auth"

const router = useRouter()
const username = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')
// validation flags
const touched = ref({
  username: false,
  password: false,
})


// Toggle password visibility
function togglePassword() {
  showPassword.value = !showPassword.value
}

async function login() {
  loading.value = true
  error.value = ''

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'X-Tenant-Id': 'development',
        'X-Request-Id': crypto.randomUUID(),
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    })

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}))
      const error = new Error(errorBody.message || 'Login failed')
      error.status = res.status   // 👈 IMPORTANT
      throw error
    }

    const data = await res.json()

    // ✅ Save token correctly
    localStorage.setItem('accessToken', data.access_token)
    setAuth(data)
    // Save user info if you want
    localStorage.setItem('user', JSON.stringify(data.user))

    router.push('/home')

  } catch (err) {
    goToErrorPage(err)

  } finally {
    loading.value = false
  }
}
function goToErrorPage(err) {
  let friendlyMessage = "An unexpected error occurred."
  let technicalMessage = ""

  switch (err.status) {
    case 400:
      friendlyMessage = "Invalid request."
      break
    case 401:
      friendlyMessage = "Invalid username or password."
      break
    case 422:
      friendlyMessage = "Please check your input."
      break
  }

  if (import.meta.env.DEV) {
    technicalMessage = err.message
  }

  router.push({
    path: "/error",
    query: {
      message: friendlyMessage,
      details: technicalMessage,
    },
  })
}



</script>

<style scoped>
.h-6\.5 {
  height: 1.625rem;
}
</style>
