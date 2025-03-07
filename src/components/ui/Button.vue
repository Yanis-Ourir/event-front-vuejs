<script setup lang="ts">
defineProps({
    link: String,
    text: String,
});
</script>

<template>
    <div class="relative inline-flex group">
        <!-- Effet de glow flou -->
        <div
            class="absolute transition-all duration-500 ease-in-out opacity-70 -inset-px bg-white rounded-xl blur-md group-hover:opacity-100 group-hover:blur-lg group-hover:scale-105 group-hover:duration-300">
        </div>

        <!-- Bouton -->
        <a :href="link" 
           class="relative inline-flex items-center justify-center px-6 py-2 text-black transition-all duration-300 ease-in-out bg-white font-pj rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 group-hover:scale-105">
           {{ text }}
        </a>
    </div>
</template>
