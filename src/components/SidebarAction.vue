<template>
  <button
    type="button"
    class="w-full text-left"
    @click="$emit('click')"
  >
    <div
      class="group py-[3px] transition-all duration-75 active:scale-[99%] cursor-pointer"
    >
      <div
        class="flex items-center pl-2.5 py-1.5 rounded-[6px] text-sm min-h-8 transition-colors duration-75 group-hover:bg-primary/5"
      >
        <!-- Icon -->
        <component
          :is="iconComponent"
          class="w-4 h-4 shrink-0 text-[#60605F] group-hover:text-primary/80 transition-colors duration-75"
        />

        <!-- Label -->
        <span
          class="whitespace-pre text-ellipsis overflow-hidden flex-1 pl-3 pr-2 font-medium text-[13px] text-start text-[#464745] group-hover:text-primary/80 transition-colors duration-75"
        >
          {{ label }}
        </span>
      </div>
    </div>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import {
  MessageSquareWarning,
  CircleQuestionMark,
} from 'lucide-vue-next'

const props = defineProps({
  label: { type: String, required: true },
  icon: { type: String, required: true },
})

defineEmits(['click'])

const icons = {
  feedback: MessageSquareWarning,
  help: CircleQuestionMark,
}

const iconComponent = computed(() => icons[props.icon])
</script>
