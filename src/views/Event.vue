<script setup lang="ts">
import { computed } from 'vue';
import EventCard from '@/components/ui/EventCard.vue';
import PastEventCard from '@/components/ui/PastEventCard.vue';

const templateEvent = [
    {
        title: 'React Conference 2023',
        date: '2023-10-15',
        description: 'A conference about the latest in React development.',
        location: 'London, United Kingdom'
    },
    {
        title: 'Vue.js Conference 2023',
        date: '2023-11-15',
        description: 'A conference about the latest in Vue.js development.',
        location: 'Paris, France'
    },
    {
        title: 'JavaScript Meetup',
        date: '2023-12-05',
        description: 'A meetup for JavaScript enthusiasts to share knowledge and network.',
        location: 'Berlin, Germany'
    },
    {
        title: 'Angular Conference 2025',
        date: '2025-12-15',
        description: 'A conference about the latest in Angular development.',
        location: 'Madrid, Spain'
    }
];

const now = new Date();

const pastEvents = computed(() => templateEvent.filter(event => new Date(event.date) < now));
const upcomingEvents = computed(() => templateEvent.filter(event => new Date(event.date) >= now));
</script>

<template>
    <div class="container mx-auto px-6 md:px-12 py-12">
        <!-- Titre -->
        <h1 class="text-4xl font-bold text-center text-white mb-10">
            🎟️ <span class="bg-gradient-to-r from-[#673AB7] to-[#9C27B0] text-transparent bg-clip-text">Evently: Upcoming & Past Events</span>
        </h1>

        <!-- Événements à venir -->
        <section>
            <h2 class="text-2xl font-semibold text-white mb-6">📅 Upcoming Events</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="event in upcomingEvents" :key="event.title">
                    <EventCard :title="event.title" :date="new Date(event.date).toLocaleString('en-En', {
                        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                    })" :description="event.description" :location="event.location" />
                </div>
            </div>
        </section>

        <!-- Événements passés -->
         <section class="mt-12">
            <h2 class="text-2xl font-semibold text-gray-500 mb-6">⏳ Past Events</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="event in pastEvents" :key="event.title">
                <PastEventCard :title="event.title" :date="new Date(event.date).toLocaleString('en-En', {
                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
                })" :description="event.description" :location="event.location" />
                </div>
            </div>
        </section>
    </div>
</template>
