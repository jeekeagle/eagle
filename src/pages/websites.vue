<script setup lang="ts">
import { computed } from 'vue'
import { websiteGroups } from '../data/content'

const groupKeys = computed(() => Object.keys(websiteGroups))

function statusClass(s?: '在用' | '归档' | '规划中') {
  if (s === '在用') return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
  if (s === '归档') return 'bg-zinc-500/15 text-zinc-600 dark:text-zinc-300'
  return 'bg-amber-500/15 text-amber-700 dark:text-amber-300'
}
</script>

<template>
  <div class="text-center prose m-auto mb-8">
    <h1 class="mb-0 slide-enter-50">网站</h1>
    <p class="op-50 italic mt-2 text-base">
      我搭过或正在维护的站点。
    </p>
  </div>

  <article>
    <div class="prose m-auto slide-enter-content">
      <div
        v-for="(key, cidx) in groupKeys"
        :key="key"
        slide-enter
        :style="{ '--enter-stage': cidx + 1, '--enter-step': '60ms' }"
        class="mb-6"
      >
        <h3 class="!mt-6 !mb-3 op-60">{{ key }}</h3>
        <ul>
          <li
            v-for="(s, i) in websiteGroups[key]"
            :key="s.name"
            class="slide-enter mb-3"
            :style="{ '--enter-stage': i, '--enter-step': '40ms' }"
          >
            <div class="flex items-center gap-2 flex-wrap">
              <a :href="s.href" target="_blank" rel="noopener" class="!border-none font-semibold">
                <i class="i-ri-global-line op-60 mr-1"></i>
                {{ s.name }}
              </a>
              <span
                v-if="s.status"
                :class="['text-xs rounded px-1.5 py-0.5', statusClass(s.status)]"
              >{{ s.status }}</span>
            </div>
            <p class="op-60 text-sm mt-0 ml-6">{{ s.desc }}</p>
          </li>
        </ul>
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
