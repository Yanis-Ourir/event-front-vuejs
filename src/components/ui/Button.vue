<script setup lang="ts">
    defineProps({
        link: String,
        text: String,
    });
</script>

<template>
        <a :href="link" class="px-6 py-3 rounded-xl bg-white text-black drop-shadow-3xl font-medium shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            {{ text }}
        </a>
</template>