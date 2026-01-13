<template>
  <RouterLink :to="to" class="block">
    <div
      class="group py-[3px] transition-all duration-75 active:scale-[99%] cursor-pointer"
    >
      <div
        :class="[
          'flex items-center pl-2.5 py-1.5 rounded-[6px] text-sm min-h-8 transition-colors duration-75',
          isActive
            ? 'bg-primary/10'
            : 'group-hover:bg-primary/5'
        ]"
      >
        <!-- Icon -->
        <component
          :is="iconComponent"
          class="w-4 h-4 shrink-0 transition-colors duration-75"
          :class="isActive ? 'text-primary/80' : 'text-[#60605F] group-hover:text-primary/80'"
        />

        <!-- Label -->
        <span
          class="whitespace-pre text-ellipsis overflow-hidden flex-1 pl-3 pr-2 font-medium text-[13px] text-start transition-colors duration-75"
          :class="isActive ? 'text-primary' : 'text-[#464745] group-hover:text-primary/80'"
        >
          {{ label }}
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  House,
  Clock,
  Table2,
  ClipboardList,
  SquareDashed
} from 'lucide-vue-next'

const props = defineProps({
  to: { type: String, required: true },
  label: { type: String, required: true },
  icon: { type: String, required: true },
})

const route = useRoute()

const isActive = computed(() => route.path === props.to)

const icons = {
  house: House,
  clock: Clock,
  table: Table2,
  'clipboard-list': ClipboardList,
  'square-dashed': SquareDashed,
}

const iconComponent = computed(() => icons[props.icon])
</script>
