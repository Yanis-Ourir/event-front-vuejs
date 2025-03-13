<script setup lang="ts">
import { computed, ref } from 'vue';
import EventCard from '@/components/ui/EventCard.vue';
import PastEventCard from '@/components/ui/PastEventCard.vue';
import EventForm from '@/components/EventForm.vue';

const templateEvent = [
    { title: 'React Conference 2023', date: '2023-10-15', description: 'A conference about React.', location: 'London' },
    { title: 'Vue.js Conference 2023', date: '2023-11-15', description: 'A conference about Vue.js.', location: 'Paris' },
    { title: 'JavaScript Meetup', date: '2023-12-05', description: 'A JS meetup.', location: 'Berlin' },
    { title: 'Angular Conference 2025', date: '2025-12-15', description: 'A conference about Angular.', location: 'Madrid' }
];

const now = new Date();
const searchQuery = ref('');
const formModal = ref(false);
const showUpcomingEvents = ref(true);

const pastEvents = computed(() =>
    templateEvent.filter(event => new Date(event.date) < now && event.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
);

const upcomingEvents = computed(() =>
    templateEvent.filter(event => new Date(event.date) >= now && event.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
);

const toggleView = (isUpcoming: boolean) => {
    showUpcomingEvents.value = isUpcoming;
};
</script>

<template>
    <div class="container mx-auto px-6 md:px-12 py-12">
        <h1 class="text-4xl font-bold text-center text-white mb-10">
            🎟️ <span class="bg-gradient-to-r from-[#673AB7] to-[#9C27B0] text-transparent bg-clip-text">Evently: Upcoming & Past Events</span>
        </h1>
        
            <div class="grid grid-cols-2 gap-4 md:grid-cols-4 border-b border-gray-700 py-4 items-center text-center mb-6">
                <h2 @click="toggleView(true)" :class="{'text-white': showUpcomingEvents, 'text-gray-500': !showUpcomingEvents}" class="text-lg md:text-2xl font-semibold cursor-pointer hover:text-white">📅 Upcoming Events</h2>
                <h3 @click="toggleView(false)" :class="{'text-white': !showUpcomingEvents, 'text-gray-500': showUpcomingEvents}" class="text-lg md:text-2xl font-semibold cursor-pointer hover:text-white">⏳ Past Events</h3>
                <input v-model="searchQuery" type="text" placeholder="Search events..." class="bg-gray-800 text-white px-4 py-2 rounded-lg">
                <div>
                    <button @click="formModal = true" class="text-white font-medium bg-gradient-to-r from-[#673AB7] to-[#9C27B0] py-2 rounded-lg transition-all hover:scale-105 px-6">New Event 📝</button>
                </div>
            </div>

        <div class="flex justify-between mb-6">
            
        </div>

        

        <section v-if="showUpcomingEvents">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCard v-for="event in upcomingEvents" :key="event.title" v-bind="event" v-if="upcomingEvents.length > 0"/>
                <p v-else class="text-white text-center w-full">No upcoming events found for the name {{ searchQuery }}.</p>
            </div>
        </section>
        

        <section v-else>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PastEventCard v-for="event in pastEvents" :key="event.title" v-bind="event" v-if="pastEvents.length > 0"/>
                <p v-else class="text-white text-center w-full">No past events found for the name {{ searchQuery }}.</p>
            </div>
        </section>

        <div v-if="formModal" class="fixed inset-0 flex items-center justify-center bg-black/50">
            <EventForm @closeFormModal="formModal = false" />
        </div>
    </div>
</template>

<style scoped>
input:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(103, 58, 183, 0.5);
}
</style>