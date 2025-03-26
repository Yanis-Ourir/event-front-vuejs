<script setup lang="ts">

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

const isDarkMode = document.body.classList.contains('dark');

</script>

<template>
  <div class="px-6 py-2 rounded-2xl bg-white/10 dark:bg-black/20
            border border-white/20 dark:border-gray-600 
            backdrop-blur-lg shadow-[inset_0_0_8px_rgba(255,255,255,0.2)]">
    <button @click="toggleDarkMode">
      {{ isDarkMode ? '🌞' : '🌙' }}
    </button>
  </div>
</template>



<style scoped>
/* body.dark {
  background-color: var(--color-bg-dark);
  color: var(--color-text-dark);
} */
</style>
