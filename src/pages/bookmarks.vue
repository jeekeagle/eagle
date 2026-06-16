<script setup lang="ts">
import { computed } from 'vue'
import { bookmarkGroups } from '../data/content'

const groupKeys = computed(() => Object.keys(bookmarkGroups))

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\/]+/g, '-')
}
</script>

<template>
  <div class="text-center prose m-auto mb-8">
    <h1 class="mb-0 slide-enter-50">保存</h1>
    <p class="op-50 italic mt-2 text-base">
      我日常收藏的网站、工具与灵感。
    </p>
  </div>

  <article>
    <div class="prose m-auto slide-enter-content">
      <div
        v-for="(key, cidx) in groupKeys"
        :key="key"
        :id="slug(key)"
        slide-enter
        :style="{ '--enter-stage': cidx + 1, '--enter-step': '60ms' }"
        class="mb-6"
      >
        <h3 class="!mt-6 !mb-2 op-60">{{ key }}</h3>
        <ul>
          <li
            v-for="(b, i) in bookmarkGroups[key]"
            :key="b.name"
            class="slide-enter"
            :style="{ '--enter-stage': i, '--enter-step': '40ms' }"
          >
            <a :href="b.href" target="_blank" rel="noopener" class="!border-none font-semibold">
              <i class="i-ri-bookmark-line op-60 mr-1"></i>
              {{ b.name }}
            </a>
            <span v-if="b.desc" class="op-60 ml-2 text-sm">— {{ b.desc }}</span>
          </li>
        </ul>
      </div>
    </div>
  </article>

  <!-- 侧栏目录 -->
  <div class="bookmarks-toc">
    <div class="bookmarks-toc-anchor">
      <i class="i-ri-menu-2-fill"></i>
    </div>
    <ul>
      <li v-for="key of groupKeys" :key="key">
        <a :href="`#${slug(key)}`">{{ key }}</a>
      </li>
    </ul>
  </div>

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
