<!-- src/components/Sidebar.vue -->
<template>
  <aside class="bg-background h-full w-64 border-r hidden lg:flex flex-col">
    <div class="flex items-center justify-center h-16 border-b gap-3 px-8">
      <span class="text-xs text-gray-800 font-semibold">Unbekannte Praxis</span>
      <img src="/logo-wing.svg" alt="Logo" class="h-3 w-auto opacity-80" />
    </div>

    <nav class="flex-1 overflow-auto p-4 space-y-2">
      <SidebarLink to="/home" icon="house" text="Home" active />
      <SidebarLink to="/time" icon="clock" text="Meine Zeit erfassen" />
      <SidebarLink to="/shifts" icon="table" text="Mein Dienstplan" />
      <SidebarLink to="/monthly-summary" icon="clipboard-list" text="Meine Monatsberichte" />
      <SidebarLink to="/absences" icon="square-dashed" text="Meine Abwesenheiten" />
    </nav>

    <div class="p-4 space-y-2">
      <button class="w-full flex items-center gap-2 text-sm font-medium px-3 py-2 rounded hover:bg-primary/5">
        Feedback geben
      </button>
      <button class="w-full flex items-center gap-2 text-sm font-medium px-3 py-2 rounded hover:bg-primary/5">
        Hilfe
      </button>
    </div>
  </aside>
</template>

<script setup>
import SidebarLink from './SidebarLink.vue'
</script>
