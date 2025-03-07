<template>
  <div :class="{ 'dark': isDarkMode }">
    <button @click="toggleDarkMode">
      {{ isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode' }}
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
body.dark {
  background-color: var(--color-bg-dark);
  color: var(--color-text-dark);
}
</style>
