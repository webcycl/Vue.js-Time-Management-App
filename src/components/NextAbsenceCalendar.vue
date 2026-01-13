<template>
  <div class="w-full max-w-[348px]">
    <!-- Header -->
    <div class="flex items-center h-8 mb-3">
      <button
        class="h-7 w-7 border rounded-md hover:bg-gray-100 flex items-center justify-center"
        @click="prevMonth"
      >
        ‹
      </button>

      <span class="flex-1 text-center text-base font-semibold text-gray-700">
        {{ monthYear }}
      </span>

      <button
        class="h-7 w-7 border rounded-md hover:bg-gray-100 flex items-center justify-center"
        @click="nextMonth"
      >
        ›
      </button>
    </div>

    <!-- Weekdays -->
    <div class="grid grid-cols-7 text-xs text-gray-400 mb-1">
      <div v-for="d in weekdays" :key="d" class="text-center">
        {{ d }}
      </div>
    </div>

    <!-- Days -->
    <div class="grid grid-cols-7 gap-0.5">
      <div
        v-for="(day, index) in calendarDays"
        :key="index"
        class="aspect-square flex items-center justify-center text-sm rounded-md"
        :class="{
          'text-gray-400': !day.currentMonth,
          'hover:bg-primary/5 cursor-pointer': day.currentMonth
        }"
      >
        {{ day.date }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const today = new Date()
const currentMonth = ref(today.getMonth())
const currentYear = ref(today.getFullYear())

const weekdays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

const monthYear = computed(() =>
  new Date(currentYear.value, currentMonth.value).toLocaleDateString('de-DE', {
    month: 'long',
    year: 'numeric',
  })
)

const daysInMonth = (month, year) =>
  new Date(year, month + 1, 0).getDate()

const firstDayOfMonth = computed(() => {
  const day = new Date(currentYear.value, currentMonth.value, 1).getDay()
  return day === 0 ? 6 : day - 1 // convert Sunday → last
})

const calendarDays = computed(() => {
  const days = []

  const prevMonthDays = daysInMonth(
    currentMonth.value - 1,
    currentYear.value
  )

  // Previous month filler
  for (let i = firstDayOfMonth.value - 1; i >= 0; i--) {
    days.push({
      date: prevMonthDays - i,
      currentMonth: false,
    })
  }

  // Current month
  for (let i = 1; i <= daysInMonth(currentMonth.value, currentYear.value); i++) {
    days.push({
      date: i,
      currentMonth: true,
    })
  }

  // Next month filler
  while (days.length < 42) {
    days.push({
      date: days.length - daysInMonth(currentMonth.value, currentYear.value) + 1,
      currentMonth: false,
    })
  }

  return days
})

const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}
</script>
