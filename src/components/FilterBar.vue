<script setup lang="ts">
import type { Event } from '@/views/Event.vue';
import { Search, LayoutGrid, ArrowUpDown, PlusCircle } from 'lucide-vue-next';
import { ref } from 'vue';

const props = defineProps<{
    events: Event[],
    viewMode: string,
    sortDirection: string,
    showFilters: boolean,
    selectedLocation: string,
    toggleViewMode: () => void,
    toggleSortDirection: () => void,
    filtersPanelClass: string,
    resetFilters: () => void,
    searchQuery: string
}>();

const emit = defineEmits(['openFormModal', 'search']);

const openModal = () => {
    emit('openFormModal');
}

const handleSearch = (event: any) => {
  emit('search', event.target.value);
};


</script>

<template>
  <div class="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl shadow-xl p-4 mb-8">
        <div class="flex flex-col md:flex-row justify-between gap-4">
         
          <div class="relative flex-grow max-w-md">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search :size="18" class="text-purple-400" />
            </div>
            <input 
              :value="searchQuery"
              @input="handleSearch"
              type="text" 
              placeholder="Search events..." 
              class="bg-gray-900 text-white w-full pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-purple-500 transition-all"
            />
          </div>
          
          
          <div class="flex items-center gap-2">
            <button 
              @click="toggleViewMode" 
              class="p-2 rounded-lg bg-gray-900 text-white hover:bg-purple-900 transition-all"
              :title="viewMode === 'grid' ? 'Switch to list view' : 'Switch to grid view'"
            >
              <LayoutGrid v-if="viewMode === 'grid'" :size="20" />
              <span v-else>📋</span>
            </button>
            
            <button 
              @click="toggleSortDirection" 
              class="p-2 rounded-lg bg-gray-900 text-white hover:bg-purple-900 transition-all flex items-center gap-1"
              :title="sortDirection === 'asc' ? 'Sort by date: newest first' : 'Sort by date: oldest first'"
            >
              <ArrowUpDown :size="20" />
              <span class="hidden md:inline text-sm">{{ sortDirection === 'asc' ? 'Oldest first' : 'Newest first' }}</span>
            </button>
        
            
            <button 
              @click="openModal" 
              class="text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 p-2 rounded-lg transition-all hover:from-purple-500 hover:to-fuchsia-500 flex items-center gap-1"
            >
              <PlusCircle :size="18" />
              <span class="hidden md:inline text-sm">New Event</span>
            </button>
          </div>
        </div>
        
        
        
      </div>
</template>