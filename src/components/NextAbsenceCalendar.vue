<template>
  <div class="w-full max-w-[348px]">
    <!-- Header -->
    <div class="flex items-center h-8 mb-3">
      <button
        class="h-7 w-7 border rounded-md hover:bg-gray-100 flex items-center justify-center"
        @click="prevMonth"
      >
        <ChevronLeft class="w-4 h-4" />
      </button>

      <span class="flex-1 text-center text-base font-semibold text-gray-700">
        {{ monthYear }}
      </span>

      <button
        class="h-7 w-7 border rounded-md hover:bg-gray-100 flex items-center justify-center"
        @click="nextMonth"
      >
        <ChevronRight class="w-4 h-4" />
      </button>
    </div>

    <!-- Calendar -->
    <VueDatePicker
      v-model="date"
      inline
      :month="month"
      :year="year"
      :enable-time-picker="false"
      :hide-navigation="true"
      auto-apply
      class="calendar"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const date = ref(new Date())
const month = ref(date.value.getMonth())
const year = ref(date.value.getFullYear())

const monthYear = computed(() =>
  date.value.toLocaleDateString('de-DE', {
    month: 'long',
    year: 'numeric',
  })
)

const prevMonth = () => {
  if (month.value === 0) {
    month.value = 11
    year.value--
  } else {
    month.value--
  }
}

const nextMonth = () => {
  if (month.value === 11) {
    month.value = 0
    year.value++
  } else {
    month.value++
  }
}
</script>

<style scoped>
.calendar :deep(.dp__calendar) {
  width: 100%;
}

.calendar :deep(.dp__cell_inner) {
  border-radius: 6px;
  font-size: 13px;
}

.calendar :deep(.dp__cell_inner:hover) {
  background-color: rgba(59, 130, 246, 0.05);
}
</style>
