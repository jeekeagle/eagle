<script setup lang="ts">
import { computed, ref } from 'vue'
import { posts, tagColor } from '../data/posts'

// 一些筛选器
const showZhOnly = ref(false)

// 按年份分组
const grouped = computed(() => {
  const filtered = showZhOnly.value ? posts.filter(p => p.lang === 'zh') : posts
  const map = new Map<string, typeof posts>()
  for (const p of filtered) {
    const y = p.date.slice(0, 4)
    if (!map.has(y)) map.set(y, [])
    map.get(y)!.push(p)
  }
  return Array.from(map.entries()).sort((a, b) => Number(b[0]) - Number(a[0]))
})

function formatDate(iso: string) {
  const d = new Date(iso)
  return `${d.getMonth() + 1} 月 ${d.getDate()} 日`
}

function langLabel(lang?: 'zh' | 'en') {
  if (lang === 'zh') return '中文'
  if (lang === 'en') return 'EN'
  return ''
}

function langClass(lang?: 'zh' | 'en') {
  if (lang === 'zh') return 'bg-rose-500/15 text-rose-700 dark:text-rose-300'
  if (lang === 'en') return 'bg-sky-500/15 text-sky-700 dark:text-sky-300'
  return 'bg-zinc-500/15 text-zinc-600 dark:text-zinc-300'
}
</script>

<template>
  <article>
    <div class="prose m-auto slide-enter-content">
      <div class="prose m-auto mb-8 select-none animate-none op100">
        <button
          flex="~ gap-1" items-center mb-3 op-30 text-sm
          @click="showZhOnly = !showZhOnly"
        >
          <i :class="showZhOnly ? 'i-ri-checkbox-circle-line' : 'i-ri-checkbox-blank-circle-line'"></i>
          只看中文
        </button>
        <div class="mb-0 flex flex-col sm:flex-row sm:gap-3 flex-wrap text-3xl">
          <router-link to="/posts" class="!border-none opacity-100 underline">博客</router-link>
        </div>
        <p class="op-50 italic mt-2 text-sm">
          写点 AI、Agent 架构、个人知识管理、个人成长相关的事。
        </p>
      </div>

      <ul>
        <template v-for="([year, items], i) in grouped" :key="year">
          <div
            class="select-none relative h-20 pointer-events-none slide-enter"
            :style="{ '--enter-stage': i * 2 - 2, '--enter-step': '60ms' }"
          >
            <span
              class="text-8em color-transparent absolute left--3rem top--2rem font-bold stroke-text-2 op10"
            >{{ year }}</span>
          </div>
          <div
            v-for="(p, j) in items"
            :key="p.slug"
            class="slide-enter"
            :style="{ '--enter-stage': i * 2 + j + 1, '--enter-step': '60ms' }"
          >
            <router-link
              :to="`/posts/${p.slug}`"
              class="list-item block font-normal mb-6 mt-2 no-underline"
            >
              <li class="no-underline flex flex-col md:row gap-2 md:items-center">
                <div class="title text-lg leading-1.2em flex gap-2 flex-wrap items-center">
                  <span
                    v-if="langLabel(p.lang)"
                    align-middle flex-none
                    :class="['text-xs rounded px-1.5 py-0.5', langClass(p.lang)]"
                  >{{ langLabel(p.lang) }}</span>
                  <span class="align-middle">{{ p.title }}</span>
                  <span
                    v-if="p.redirect"
                    align-middle op50 flex-none text-xs ml--1.5 i-carbon-arrow-up-right
                    title="外部链接"
                  />
                </div>
                <div class="flex gap-2 items-center list-item-row flex-wrap">
                  <span class="text-sm op50 ws-nowrap">{{ formatDate(p.date) }}</span>
                  <span v-if="p.readTime" class="text-sm op40 ws-nowrap">· {{ p.readTime }} 分钟</span>
                  <span
                    v-for="t in p.tags"
                    :key="t"
                    :class="['text-xs rounded px-1.5 py-0.5', tagColor(t)]"
                  >#{{ t }}</span>
                </div>
              </li>
              <div v-if="p.desc" class="op-60 text-sm mt-1">
                {{ p.desc }}
              </div>
            </router-link>
          </div>
        </template>
      </ul>

      <div v-if="!posts.length" class="op-50 italic">还没有文章。</div>
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
