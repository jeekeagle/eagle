<script setup lang="ts">
import { talks } from '../data/posts'
</script>

<template>
  <div class="text-center prose m-auto mb-8">
    <h1 class="important-mb--4-mt-15 slide-enter-50">Talks</h1>
  </div>

  <article>
    <div class="prose m-auto slide-enter-content">
      <p class="op50 italic">
        Conference talks, podcast appearances, and presentations I've given.
      </p>
      <hr />

      <ul>
        <li
          v-for="(t, i) in talks"
          :key="t.slug"
          class="slide-enter flex flex-col md:row gap-2 md:items-center mb-4"
          :style="{ '--enter-stage': i, '--enter-step': '60ms' }"
        >
          <div class="flex gap-2 items-center flex-1">
            <i class="i-ri-slideshow-line op60"></i>
            <a
              :href="`#${t.slug}`"
              class="!border-none"
            >{{ t.title }}</a>
          </div>
          <div class="flex gap-3 justify-end items-center op50 text-sm">
            <span>{{ new Date(t.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) }}</span>
          </div>
        </li>
      </ul>
    </div>
  </article>

  <div class="mt-10 mb-6 prose m-auto flex slide-enter animate-delay-1200 copyright">
    <span class="text-sm op50">
      <a
        target="_blank"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        style="color: inherit"
      >CC BY-NC-SA 4.0</a>
      2021-{{ new Date().getFullYear() }} © Your Name
    </span>
    <div class="flex-auto"></div>
  </div>
</template>
