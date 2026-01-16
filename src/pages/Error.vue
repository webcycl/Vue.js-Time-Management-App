<template>
    <div class="w-full h-[100dvh] grid grid-rows-[auto_1fr] bg-background">
        <!-- Navbar -->
        <nav class="flex justify-between items-center sticky top-0 bg-background border-b border-[#e6e8ec] z-20">
            <div class="pr-5 md:pr-10 pl-5 md:pl-10 w-full max-w-[1296px] mx-auto flex items-center h-16">
                <router-link to="/" class="mr-auto">
                    <img src="https://app.vettime.de/_next/static/media/logo-vettime.5428390e.svg" alt="VetTime Logo"
                        class=" h-6 w-fit" />
                </router-link>
                <button class="flex items-center group">
                    <!-- Avatar -->
                    <span
                        class="flex w-8 h-8 mr-2 rounded-full bg-primary/10 text-primary items-center justify-center text-[13px]">
                        {{ initials }}
                    </span>

                    <!-- Name -->
                    <div class="flex flex-col text-start">
                        <span class="text-sm text-[#464745]">
                            {{ user?.username ?? "Unbekannter Nutzer" }}
                        </span>
                        <span class="text-xs text-[#60605F]">
                            {{ user?.tenant ?? "" }}
                        </span>
                    </div>
                </button>
            </div>


        </nav>

        <!-- Content -->
        <div class="grid grid-rows-[1fr_auto] overflow-auto">
            <main class="relative bg-background">
                <div class="pr-5.5 md:pr-10 pl-5.5 md:pl-10 flex items-center justify-center h-full">
                    <div class="flex flex-col items-center max-w-sm gap-10">
                        <!-- Illustration -->
                        <img src="https://app.vettime.de/images/undraw_page-eaten_b2rt.svg" alt="Error illustration"
                            class="w-full h-auto max-w-64" />

                        <!-- Text -->
                        <div class="flex flex-col">
                            <p class="text-center text-2xl font-semibold">
                                An error has occurred
                            </p>
                            <p class="text-gray-600 text-center font-semibold mt-2 whitespace-pre-wrap">
                                The VetTime team apologizes for the inconvenience.
                            </p>
                        </div>

                        <!-- Error details -->
                        <div v-if="message"
                            class="flex items-center font-mono rounded-lg bg-gray-100 w-full min-h-12 px-5 py-3 text-xs max-h-40 overflow-auto text-gray-700">
                            {{ message }}
                        </div>

                        <!-- Action -->
                        <button @click="reload"
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors duration-100 bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-md px-8 text-[14px] font-bold ">
                            Reload page
                        </button>
                    </div>
                </div>
            </main>

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
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import { computed } from "vue"
import { authState } from "@/stores/auth"
const route = useRoute()
const user = computed(() => authState.user)

const initials = computed(() => {
    if (!user.value?.username) return "?"
    return user.value.username
        .split(".")
        .map(p => p[0].toUpperCase())
        .join("")
})
const message =
    typeof route.query.message === "string"
        ? route.query.message
        : null

function reload() {
    window.location.reload()
}
</script>
