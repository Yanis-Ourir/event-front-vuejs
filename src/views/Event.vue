<script setup lang="ts">
import { computed, ref } from 'vue';
import EventCard from '@/components/ui/EventCard.vue';
import PastEventCard from '@/components/ui/PastEventCard.vue';
import EventForm from '@/components/EventForm.vue';
import TabNav from '@/components/TabNav.vue';
import FilterBar from '@/components/FilterBar.vue';
import { PlusCircle } from 'lucide-vue-next';

export type Event = {
  title: string;
  date: string;
  description: string;
  location: string;
};

const templateEvent = [
    { title: 'React Conference 2023', date: '2023-10-15', description: 'A conference about React.', location: 'London' },
    { title: 'Vue.js Conference 2023', date: '2023-11-15', description: 'A conference about Vue.js.', location: 'Paris' },
    { title: 'JavaScript Meetup', date: '2023-12-05', description: 'A JS meetup.', location: 'Berlin' },
    { title: 'Angular Conference 2025', date: '2025-12-15', description: 'A conference about Angular.', location: 'Madrid' }
];

const now = new Date();
const searchQuery = ref('');
const formModal = ref(false);
const activeTab = ref('upcoming');
const sortDirection = ref('asc'); 
const showFilters = ref(false);
const selectedLocation = ref('');
const viewMode = ref('grid'); 

const filteredEvents = computed(() => {
  return templateEvent.filter(event => {

    const matchesSearch = event.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    const matchesLocation = selectedLocation.value === '' || event.location === selectedLocation.value;
    
    return matchesSearch && matchesLocation;
  });
});

const pastEvents = computed(() => {
  const filtered = filteredEvents.value.filter(event => new Date(event.date) < now);
  
  return sortEvents(filtered);
});

const upcomingEvents = computed(() => {
  const filtered = filteredEvents.value.filter(event => new Date(event.date) >= now);
  
  return sortEvents(filtered);
});


const sortEvents = (events: Event[]) => {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    
    return sortDirection.value === 'asc' 
      ? dateA.getTime() - dateB.getTime() 
      : dateB.getTime() - dateA.getTime();
  });
};

const toggleSortDirection = () => {
  sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
};

const toggleViewMode = () => {
  viewMode.value = viewMode.value === 'grid' ? 'list' : 'grid';
};

const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};

const resetFilters = () => {
  searchQuery.value = '';
  selectedLocation.value = '';
  sortDirection.value = 'asc';
};

const handleSearch = (query: string) => {
  searchQuery.value = query;
};


const filtersPanelClass = computed(() => {
  return showFilters.value ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0 pointer-events-none';
});
</script>

<template>
  <div class="min-h-screen">
    <div class="container mx-auto px-4 md:px-6 py-8">

      <header class="mb-10">
        <h1 class="text-4xl font-bold text-center">
          <span class="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text">Evently</span>
          <span class="text-white text-opacity-80 ml-2 text-2xl">| Event Manager</span>
        </h1>
      </header>
      
      
      <FilterBar
        :showFilters="showFilters" 
        :selectedLocation="selectedLocation" 
        :sortDirection="sortDirection"
        :viewMode="viewMode"
        :searchQuery="searchQuery"
        @search="handleSearch"
        :toggleViewMode="toggleViewMode"
        :toggleSortDirection="toggleSortDirection"
        :filtersPanelClass="filtersPanelClass"
        :resetFilters="resetFilters"
        @openFormModal="formModal = true"
        :events="filteredEvents"
      />
      
     <TabNav :activeTab="activeTab" :setActiveTab="setActiveTab" :upcomingEvents="upcomingEvents" :pastEvents="pastEvents" />
      
 
      <div class="min-h-[300px]">
       
        <section v-if="activeTab === 'upcoming'" class="animate-fadeIn">
          <div v-if="upcomingEvents.length > 0" :class="viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'">
            <EventCard 
              v-for="event in upcomingEvents" 
              :key="event.title" 
              v-bind="event" 
              :viewMode="viewMode"
            />
          </div>
          <div v-else class="flex flex-col items-center justify-center py-20">
            <div class="text-4xl mb-4">🗓️</div>
            <p class="text-white text-opacity-80 text-center">No upcoming events found.</p>
            <button 
              @click="formModal = true" 
              class="mt-4 text-purple-400 hover:text-purple-300 flex items-center gap-2"
            >
              <PlusCircle :size="18" />
              <span>Create your first event</span>
            </button>
          </div>
        </section>
        

        <section v-else class="animate-fadeIn">
          <div v-if="pastEvents.length > 0" :class="viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'">
            <PastEventCard 
              v-for="event in pastEvents" 
              :key="event.title" 
              v-bind="event" 
              :viewMode="viewMode"
            />
          </div>
          <div v-else class="flex flex-col items-center justify-center py-20">
            <div class="text-4xl mb-4">⏳</div>
            <p class="text-white text-opacity-80 text-center">No past events match your search criteria.</p>
            <button 
              @click="resetFilters" 
              class="mt-4 text-purple-400 hover:text-purple-300"
            >
              Reset filters
            </button>
          </div>
        </section>
      </div>
    </div>
    

    <div v-if="formModal" class="fixed inset-0 flex items-center justify-center bg-black/70 z-50 backdrop-blur-sm">
      <div @click.self="formModal = false" class="fixed inset-0"></div>
      <EventForm @closeFormModal="formModal = false" />
    </div>
  </div>
</template>

<style scoped>
input:focus, select:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(137, 86, 255, 0.5);
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>