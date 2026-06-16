<script setup lang="ts">
import { computed } from 'vue'
import { photoGroups } from '../data/content'

const groupKeys = computed(() => Object.keys(photoGroups))
</script>

<template>
  <div class="text-center prose m-auto mb-8">
    <h1 class="mb-0 slide-enter-50">摄影</h1>
    <p class="op-50 italic mt-2 text-base">
      一些我用相机记录下的瞬间。
    </p>
  </div>

  <article>
    <div class="max-w-300 mx-auto slide-enter-content">
      <div
        v-for="(key, cidx) in groupKeys"
        :key="key"
        slide-enter
        :style="{ '--enter-stage': cidx + 1, '--enter-step': '60ms' }"
        class="mb-10"
      >
        <div
          class="select-none relative h-16 pointer-events-none slide-enter mb-4"
          :style="{ '--enter-stage': cidx - 2, '--enter-step': '60ms' }"
        >
          <span
            class="text-4em color-transparent absolute left--1rem top-0rem font-bold leading-1em stroke-text-1.5 stroke-text-hex-aaa op35 dark:op20"
          >{{ key }}</span>
        </div>
        <div class="photos-grid">
          <div
            v-for="(p, i) in photoGroups[key]"
            :key="p.id"
            class="photo-card slide-enter"
            :style="{
              '--enter-stage': i,
              '--enter-step': '40ms',
              background: `linear-gradient(135deg, ${p.color} 0%, var(--bg) 100%)`,
            }"
          >
            <div class="placeholder">{{ p.title }}</div>
            <div v-if="p.tags && p.tags.length" class="photo-tags">
              <span
                v-for="t in p.tags"
                :key="t"
                class="text-xs op-80 mr-1"
              >#{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>

  <div class="mt-10 mb-6 prose m-auto flex slide-enter animate-delay-1200 copyright">
    <span class="text-sm op50">
      <a
        target="_blank"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        style="color: inherit"
      >CC BY-NC-SA 4.0</a>
      2021-{{ new Date().getFullYear() }} © Yiguo
    </span>
    <div class="flex-auto"></div>
  </div>
</template>
