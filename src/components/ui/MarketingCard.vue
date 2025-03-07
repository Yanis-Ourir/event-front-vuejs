<script setup lang="ts">
defineProps({
    stat: String,
    text: String,
});
</script>

<template>
    <div 
        class="relative px-8 py-6 rounded-2xl transition-all duration-500 ease-in-out bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-600 backdrop-blur-lg shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] 
               hover:bg-gradient-to-r hover:from-[#673AB7]/40 hover:to-[#9C27B0]/40 hover:scale-105 hover:shadow-[0px_0px_20px_rgba(156,39,176,0.5)]">
        
        <!-- Glow effect -->
        <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/10 blur-md"></div>
        
        <!-- Statistique -->
        <p class="text-4xl font-bold text-white drop-shadow-md">
            {{ stat }}
        </p>

        <!-- Description -->
        <p class="mt-2 text-white/80 text-lg font-medium">
            {{ text }}
        </p>
    </div>
</template>
