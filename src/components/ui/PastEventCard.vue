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
        <div class="bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg opacity-50 grayscale">
            <h3 class="text-xl font-semibold text-gray-400">{{ title }}</h3>
            <p class="text-sm text-gray-500">{{ date }}</p>
            <p class="mt-2 text-gray-500">{{ description }}</p>
            <p class="mt-4 text-sm text-gray-600">📍 {{ location }}</p>
        </div>
</template>
