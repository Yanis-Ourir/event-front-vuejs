<script setup lang="ts">
import ColorMode from './ui/ColorMode.vue';
</script>

<template>
      <header class="flex justify-between items-center p-4">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
        <div class="wrapper">
         <nav class="flex gap-6 px-6 py-2 rounded-2xl 
            bg-white/10 dark:bg-black/20
            border border-white/20 dark:border-gray-600 
            backdrop-blur-lg shadow-[inset_0_0_8px_rgba(255,255,255,0.2)]">
            
            <RouterLink to="/" class="text-white">Overview</RouterLink>
            <RouterLink to="/register" class="text-white">Register</RouterLink>
            <RouterLink to="/login" class="text-white">Login</RouterLink>

          </nav>
        </div>
        <ColorMode />
  </header>
</template>