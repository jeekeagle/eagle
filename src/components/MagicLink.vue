<script setup lang="ts">
/**
 * Magic Link：行内头像+名字的胶囊，模仿 antfu.me 的链接样式
 */
defineProps<{
  href: string
  avatar?: string
  name: string
}>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    class="magic-link"
  >
    <span
      v-if="avatar"
      class="magic-link-img"
      :style="{ backgroundImage: `url('${avatar}')` }"
    />
    <span class="magic-link-fallback" v-else>
      {{ name.charAt(0) }}
    </span>
    <span>{{ name }}</span>
  </a>
</template>

<style scoped>
.magic-link-fallback {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.1em;
  height: 1.1em;
  border-radius: 2px;
  background: #8884;
  font-size: 0.7em;
  color: var(--fg);
}
</style>
