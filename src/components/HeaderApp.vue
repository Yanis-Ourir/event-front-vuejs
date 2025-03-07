<script setup lang="ts">
import ColorMode from '@/components/ui/ColorMode.vue'
</script>

<template>
      <header class="flex justify-between items-center p-4">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
        <div class="wrapper">
          <nav class="flex gap-6">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/register">Register</RouterLink>
              <RouterLink to="/login">Login</RouterLink>
          </nav>
        </div>
        <ColorMode />
  </header>
</template>