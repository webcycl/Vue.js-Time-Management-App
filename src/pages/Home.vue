<template>
  <div
    class="w-full h-screen "
  >
    <!-- Sidebar -->
    <aside
      class="bg-background fixed left-0 top-0 h-screen w-64 border-r hidden lg:flex flex-col z-30"
    >
      <!-- Logo -->
      <div class="flex items-center justify-center px-8 h-16 border-b gap-3">
        <span class="text-xs text-[#313230] font-semibold">Unbekannte Praxis</span>
        <img
          src="https://app.vettime.de/_next/static/media/logo-wing.1b9ec2fe.svg"
          alt="Logo"
          class="h-3 w-auto opacity-80"
        />
      </div>

      <nav class="flex-1 overflow-auto px-4 py-5">
        <SidebarLink icon="house" label="Home" to="/home" />
        <SidebarLink icon="clock" label="Meine Zeit erfassen" to="/time" />
        <SidebarLink icon="table" label="Mein Dienstplan" to="/shifts" />
        <SidebarLink
          icon="clipboard-list"
          label="Meine Monatsberichte"
          to="/monthly-summary"
        />
        <SidebarLink icon="square-dashed" label="Meine Abwesenheiten" to="/absences" />
      </nav>

      <!-- Bottom Buttons -->
      <div class="flex flex-col px-4 pb-4">
        <SidebarAction icon="feedback" label="Feedback geben" @click="openFeedback" />

        <SidebarAction icon="help" label="Hilfe" @click="openHelp" />
      </div>
    </aside>

    <!-- Main Content -->
<div class="flex flex-col min-h-screen lg:ml-64">
      <!-- Mobile Header -->
      <header class="flex items-center justify-between h-12 border-b lg:hidden px-4">
        <button @click="sidebarOpen = !sidebarOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <span
          class="text-base truncate font-semibold text-gray-600 overflow-hidden text-ellipsis mr-auto select-none"
          >Unbekannte Praxis</span
        >
      </header>

      <!-- Content -->
      <main class="flex-1 bg-white overflow-auto p-6">
        <h1 class="text-2xl sm:text-3xl font-bold mb-2">
          Willkommen, Unbekannter Nutzer
        </h1>
        <p class="text-muted-foreground mb-6 text-[#78716c]">
          Hier ist eine Übersicht Ihrer Zeiterfassung
        </p>

        <!-- Dashboard Cards -->
        <div class="pr-5.5 md:pr-10 pl-5.5 grid gap-4 grid-cols-1 md:grid-cols-3 pb-20">
          <div class="p-6 bg-white border rounded-lg shadow">
            <h3 class="font-bold text-gray-700 mb-2">Nicht eingestempelt</h3>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 duration-100 bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-md px-8 text-[14px] font-bold w-full focus-visible:ring-transparent"
            >
              Einstempeln
            </button>
          </div>

          <div class="p-6 bg-white border rounded-lg shadow">
            <h3 class="tracking-tight text-lg font-semibold">
              0 Min <span class="text-base text-gray-400">von 40 Wochenstunden</span>
            </h3>
            <div class="h-3 bg-gray-200 rounded-full overflow-hidden mt-2">
              <div class="h-full w-0 bg-blue-600 transition-all"></div>
            </div>
          </div>

          <div
            class="p-6 pb-0 bg-white border rounded-lg shadow flex items-center justify-center pt-64"
          >
            <span class="text-gray-400 text-center">
              Klicken Sie auf einen Mitarbeiter, um den Konto-Verlauf einzusehen
            </span>
          </div>

          <div class="p-6 bg-white border rounded-lg shadow">
            <h3 class="font-bold text-gray-700 mb-2">Ihre nächste Abwesenheit</h3>
            <NextabsenceCalendar></NextabsenceCalendar>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import SidebarLink from "@/components/SidebarLink.vue";
import sidebarAction from "@/components/SidebarAction.vue";
import NextabsenceCalendar from "@/components/NextAbsenceCalendar.vue";
</script>

<style scoped>
body {
  font-family: Inter, sans-serif;
}
</style>
