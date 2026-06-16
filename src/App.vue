<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import DotsBackground from './components/DotsBackground.vue'
</script>

<template>
  <DotsBackground />
  <AppHeader />
  <main class="app-main">
    <router-view />
  </main>
</template>
