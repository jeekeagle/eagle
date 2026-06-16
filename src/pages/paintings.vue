<script setup lang="ts">
/**
 * 绘画 —— AI 画画 + 随手涂鸦
 */
const paintings = [
  { id: 'pa1', title: '窗台上的日落', date: '2025-12-04', color: '#f59e0b', tags: ['AI 画画'] },
  { id: 'pa2', title: '雨夜街角', date: '2025-11-21', color: '#0e7490', tags: ['AI 画画'] },
  { id: 'pa3', title: '山与海之间', date: '2025-11-05', color: '#15803d', tags: ['AI 画画'] },
  { id: 'pa4', title: '童话小镇 · 入口', date: '2025-10-18', color: '#db2777', tags: ['AI 画画', '童话'] },
  { id: 'pa5', title: '机器人在发呆', date: '2025-10-02', color: '#6366f1', tags: ['AI 画画'] },
  { id: 'pa6', title: '清晨咖啡', date: '2025-09-19', color: '#92400e', tags: ['AI 画画'] },
]
</script>

<template>
  <div class="text-center prose m-auto mb-8">
    <h1 class="mb-0 slide-enter-50">绘画</h1>
  </div>

  <article>
    <div class="max-w-300 mx-auto slide-enter-content">
      <p class="op50 italic text-center">
        AI 画画与随手涂鸦的归档。
      </p>

      <div class="photos-grid mt-8">
        <div
          v-for="(p, i) in paintings"
          :key="p.id"
          class="photo-card slide-enter"
          :style="{
            '--enter-stage': i,
            '--enter-step': '40ms',
            background: `linear-gradient(135deg, ${p.color} 0%, var(--bg) 100%)`,
          }"
        >
          <div class="placeholder">{{ p.title }}</div>
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
