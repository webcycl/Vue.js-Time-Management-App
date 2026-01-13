<template>
   <nav class="sticky top-0 bg-background border-b border-[#e6e8ec] z-20">
    <div class="pr-5.5 md:pr-10 pl-5.5 md:pl-10 w-full max-w-[1296px] mx-auto flex justify-between items-center h-16">
      <!-- Logo -->
      <a href="/" class="mr-auto">
        <img
          src="https://app.vettime.de/_next/static/media/logo-vettime.5428390e.svg"
          alt="VetTime Logo"
          class="h-6.5 w-fit"
          width="294"
          height="63"
          loading="lazy"
        />
      </a>

      <!-- Buttons -->
      <div class="flex items-center gap-2">
        <!-- Login Button -->
        <router-link to="/login">
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[13px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 duration-100 border-input hover:text-accent-foreground bg-transparent text-gray-700 border hover:bg-gray-100/50 max-h-8 h-8 px-3.5"
          >
            Login
          </button>
        </router-link>

        <!-- Demo Button -->
        <a href="https://vettime.de#kontaktformular" target="_blank">
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-[13px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 duration-100 bg-primary text-primary-foreground hover:bg-primary/90 max-h-8 h-8 px-3.5 w-fit"
          >
            Demo buchen
          </button>
        </a>
      </div>

      <!-- Notifications container (hidden, but required for future notifications) -->
      <div role="region" aria-label="Notifications (F8)" tabindex="-1" style="pointer-events:none">
        <ol
          tabindex="-1"
          class="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
        ></ol>
      </div>
    </div>
  </nav>
  <div class="min-h-screen bg-background flex flex-col lg:flex-row">
    <!-- Left side: Form -->
    <div class="flex flex-1 justify-center items-center p-6">
      <div class="w-full max-w-md bg-card text-card-foreground rounded-lg shadow-md p-6">
        <h2 class="text-3xl font-bold text-center mb-6">Demo Login</h2>
        <form class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium mb-1">Benutzername</label>
            <input
              type="text"
              id="username"
              placeholder="Ihr Benutzername"
              class="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
        <div class="relative">
    <!-- Password Input -->
    <input
      :type="showPassword ? 'text' : 'password'"
      id="password"
      name="password"
      autocomplete="current-password"
      placeholder="Ihr Passwort"
      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 pr-10"
    />

    <!-- Eye Toggle Button -->
    <button
      type="button"
      @click="togglePassword"
      class="absolute top-0 right-0 h-full px-3.5 flex items-center justify-center text-muted-foreground hover:text-foreground focus:outline-none"
    >
      <!-- Closed eye when password is hidden -->
      <svg
        v-if="!showPassword"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-eye-off w-4 h-4"
        aria-hidden="true"
      >
        <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
        <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
        <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
        <path d="m2 2 20 20"></path>
      </svg>

      <!-- Open eye when password is visible -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-eye w-4 h-4"
        aria-hidden="true"
      >
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    </button>
  </div>
          <button
            type="submit"
            class="w-full py-3 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
          >
            Anmelden
          </button>
        </form>
      </div>
    </div>

    <!-- Right side: Image for desktop -->
    <div class="hidden lg:flex flex-1 justify-center items-center -gray-100">
      <img
        src="https://app.vettime.de/images/undraw_real-time-collaboration_bchs.svg"
        alt="Collaboration illustration"
        class="w-3/4 "
      />
    </div>
  </div>
   <footer class="py-12 bg-[#F8F9FA] border-t border-[#e6e8ec]">
    <div class="pr-5.5 md:pr-10 pl-5.5 md:pl-10 w-full max-w-[1296px] mx-auto flex items-center justify-center">
      <div class="flex gap-4 w-fit items-center">
        <!-- Datenschutz -->
        <a
          href="https://vettime.de/datenschutz"
          target="_blank"
          class="text-xs text-[#667093] hover:text-[#151618]"
        >
          Datenschutz
        </a>

        <!-- Separator -->
        <div class="w-0.25 h-3.5 bg-[#e6e8ec]"></div>

        <!-- Impressum -->
        <a
          href="https://vettime.de/impressum"
          target="_blank"
          class="text-xs text-[#667093] hover:text-[#151618]"
        >
          Impressum
        </a>

        <!-- Separator -->
        <div class="w-0.25 h-3.5 bg-[#e6e8ec]"></div>

        <!-- AGB -->
        <a
          href="https://vettime.de/agbs"
          target="_blank"
          class="text-xs text-[#667093] hover:text-[#151618]"
        >
          AGB
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// Reactive variable to toggle visibility
const showPassword = ref(false)

function togglePassword() {
  showPassword.value = !showPassword.value
}
</script>

<style scoped>
.h-6\.5 {
  height: 1.625rem; /* 6.5 / 4 */
}</style>
