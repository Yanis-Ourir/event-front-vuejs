<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    message: String
})
</script>

<template>
    <div class="bg-red-300 text-white p-4 rounded-lg text-center absolute top-0 animate-notification">
        {{ message }}
    </div>
</template>

<style scoped>
    .animate-notification {
        animation: slideDown 0.2s ease forwards;
    }

    @keyframes slideDown {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }
        100% {
            opacity: 1;
            transform: translateY(115%);
        }
    }
</style>