<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import EventCard from '@/components/ui/EventCard.vue';
import PastEventCard from '@/components/ui/PastEventCard.vue';
import EventForm from '@/components/EventForm.vue';
import { Search, Calendar, LayoutGrid, Clock, Filter, Plus, ArrowUpDown } from 'lucide-vue-next';

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


const locations = computed(() => {
  const uniqueLocations = new Set(templateEvent.map(event => event.location));
  return Array.from(uniqueLocations);
});

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

// Fonction de tri des événements
const sortEvents = (events) => {
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

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const resetFilters = () => {
  searchQuery.value = '';
  selectedLocation.value = '';
  sortDirection.value = 'asc';
};

// Animation pour le panneau de filtres
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
      
      
      <div class="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl shadow-xl p-4 mb-8">
        <div class="flex flex-col md:flex-row justify-between gap-4">
         
          <div class="relative flex-grow max-w-md">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size="18" class="text-purple-400" />
            </div>
            <input 
              v-model="searchQuery" 
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
              <LayoutGrid v-if="viewMode === 'grid'" size="20" />
              <span v-else>📋</span>
            </button>
            
            <button 
              @click="toggleSortDirection" 
              class="p-2 rounded-lg bg-gray-900 text-white hover:bg-purple-900 transition-all flex items-center gap-1"
              :title="sortDirection === 'asc' ? 'Sort by date: newest first' : 'Sort by date: oldest first'"
            >
              <ArrowUpDown size="20" />
              <span class="hidden md:inline text-sm">{{ sortDirection === 'asc' ? 'Oldest first' : 'Newest first' }}</span>
            </button>
            
            <button 
              @click="showFilters = !showFilters" 
              class="p-2 rounded-lg bg-gray-900 text-white hover:bg-purple-900 transition-all"
              :class="{'bg-purple-800': showFilters}"
            >
              <Filter size="20" />
            </button>
            
            <button 
              @click="formModal = true" 
              class="text-white font-medium bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-2 rounded-lg transition-all hover:from-purple-500 hover:to-fuchsia-500 flex items-center gap-2"
            >
              <Plus size="18" />
              <span class="hidden md:inline">New Event</span>
            </button>
          </div>
        </div>
        
        
        <div 
          class="mt-4 overflow-hidden transition-all duration-300 transform"
          :class="filtersPanelClass"
        >
          <div class="bg-gray-900 rounded-lg p-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div class="flex flex-wrap gap-4">
                <div>
                  <label class="block text-sm text-gray-400 mb-1">Location</label>
                  <select 
                    v-model="selectedLocation" 
                    class="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-purple-500"
                  >
                    <option value="">All locations</option>
                    <option v-for="location in locations" :key="location" :value="location">
                      {{ location }}
                    </option>
                  </select>
                </div>
              </div>
              
              <button 
                @click="resetFilters" 
                class="text-purple-400 hover:text-purple-300 text-sm underline"
              >
                Reset filters
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Tabs de navigation -->
      <div class="flex border-b border-gray-700 mb-6">
        <button 
          @click="setActiveTab('upcoming')" 
          class="flex items-center gap-2 px-6 py-3 font-medium transition-all"
          :class="activeTab === 'upcoming' ? 'text-white border-b-2 border-purple-500 -mb-px' : 'text-gray-400 hover:text-white'"
        >
          <Calendar size="20" />
          <span>Upcoming Events</span>
          <span v-if="upcomingEvents.length > 0" class="bg-purple-600 text-white text-xs py-0.5 px-2 rounded-full ml-1">{{ upcomingEvents.length }}</span>
        </button>
        
        <button 
          @click="setActiveTab('past')" 
          class="flex items-center gap-2 px-6 py-3 font-medium transition-all"
          :class="activeTab === 'past' ? 'text-white border-b-2 border-purple-500 -mb-px' : 'text-gray-400 hover:text-white'"
        >
          <Clock size="20" />
          <span>Past Events</span>
          <span v-if="pastEvents.length > 0" class="bg-gray-600 text-white text-xs py-0.5 px-2 rounded-full ml-1">{{ pastEvents.length }}</span>
        </button>
      </div>
      
      <!-- Contenu principal -->
      <div class="min-h-[300px]">
        <!-- Section des événements à venir -->
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
              <Plus size="18" />
              <span>Create your first event</span>
            </button>
          </div>
        </section>
        
        <!-- Section des événements passés -->
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
    
    <!-- Modal formulaire -->
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