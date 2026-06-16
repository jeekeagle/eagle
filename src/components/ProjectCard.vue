<script setup lang="ts">
/**
 * 项目卡片
 */
defineProps<{
  name: string
  desc: string
  icon?: string
  href: string
}>()
</script>

<template>
  <a :href="href" target="_blank" rel="noopener" class="project-card">
    <div class="icon">
      <i v-if="icon" :class="icon" />
      <span v-else>{{ name.charAt(0) }}</span>
    </div>
    <div class="title">{{ name }}</div>
    <div class="desc">{{ desc }}</div>
  </a>
</template>
