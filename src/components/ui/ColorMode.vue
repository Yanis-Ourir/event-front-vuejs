<template>
  <div class="px-6 py-2 rounded-2xl bg-white/10 dark:bg-black/20
            border border-white/20 dark:border-gray-600 
            backdrop-blur-lg shadow-[inset_0_0_8px_rgba(255,255,255,0.2)]">
    <button @click="toggleDarkMode">
      {{ isDarkMode ? '🌞' : '🌙' }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle('dark-mode', this.isDarkMode);
    },
  },
};
</script>

<style scoped>
/* body.dark {
  background-color: var(--color-bg-dark);
  color: var(--color-text-dark);
} */
</style>
