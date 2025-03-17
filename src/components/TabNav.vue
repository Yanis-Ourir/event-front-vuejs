<script setup lang="ts">
import type { Event } from '@/views/Event.vue';
import { Calendar, Clock } from 'lucide-vue-next';
import { defineProps, computed } from 'vue'

const props = defineProps<{
    upcomingEvents: Event[],
    pastEvents: Event[],
    activeTab: string,
    setActiveTab: (tab: string) => void
}>();


</script>

<template>
    <div class="flex border-b border-gray-700 mb-6">
        <button 
          @click="setActiveTab('upcoming')" 
          class="flex items-center gap-2 px-6 py-3 font-medium transition-all"
          :class="activeTab === 'upcoming' ? 'text-white border-b-2 border-purple-500 -mb-px' : 'text-gray-400 hover:text-white'"
        >
          <Calendar :size="20" />
          <span>Upcoming Events</span>
          <span v-if="upcomingEvents.length > 0" class="bg-purple-600 text-white text-xs py-0.5 px-2 rounded-full ml-1">{{ upcomingEvents.length }}</span>
        </button>
        
        <button 
          @click="setActiveTab('past')" 
          class="flex items-center gap-2 px-6 py-3 font-medium transition-all"
          :class="activeTab === 'past' ? 'text-white border-b-2 border-purple-500 -mb-px' : 'text-gray-400 hover:text-white'"
        >
          <Clock :size="20" />
          <span>Past Events</span>
          <span v-if="pastEvents.length > 0" class="bg-gray-600 text-white text-xs py-0.5 px-2 rounded-full ml-1">{{ pastEvents.length }}</span>
        </button>
      </div>
</template>