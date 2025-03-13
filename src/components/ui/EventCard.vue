<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    date: String,
    description: String,
    location: String
});
</script>

<template>
    <div class="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg transition-all hover:border-[#9C27B0]">
        <h3 class="text-xl font-semibold text-white">{{ title }}</h3>
        <p class="text-sm text-gray-300">{{ date }}</p>
        <p class="mt-2 text-gray-400">{{ description }}</p>
        <p class="mt-4 text-sm text-violet-400">📍 {{ location }}</p>
        <a href="#" class="mt-4 inline-block text-white font-medium bg-gradient-to-r from-[#673AB7] to-[#9C27B0] px-4 py-2 rounded-lg transition-all hover:scale-105">
        Get Tickets 🎟️
        </a>
    </div>
</template>