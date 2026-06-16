<script setup lang="ts">
import { computed, ref } from 'vue'
import { onMounted, onBeforeUnmount } from 'vue'
import { demos } from '../data/content'

const columns = ref(1)

function updateCols() {
  const w = window.innerWidth
  if (w >= 1280) columns.value = 3
  else if (w >= 768) columns.value = 2
  else columns.value = 1
}

onMounted(() => {
  updateCols()
  window.addEventListener('resize', updateCols)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCols)
})

// 把数据按列数打散成多列（瀑布流效果）
const parts = computed(() => {
  const result: typeof demos[] = Array.from({ length: columns.value }, () => [])
  demos.forEach((item, i) => {
    result[i % columns.value].push(item)
  })
  return result
})

function tagColor(tag: string): string {
  const map: Record<string, string> = {
    '艺术': 'bg-rose-500/15 text-rose-700 dark:text-rose-300',
    'canvas': 'bg-rose-500/15 text-rose-700 dark:text-rose-300',
    '音频': 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
    'webgl': 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
    '物理': 'bg-blue-500/15 text-blue-700 dark:text-blue-300',
    '颜色': 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
    '字体': 'bg-violet-500/15 text-violet-700 dark:text-violet-300',
    '交互': 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300',
    '倒计时': 'bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300',
    '文字': 'bg-stone-500/15 text-stone-700 dark:text-stone-300',
  }
  return map[tag] || 'bg-zinc-500/15 text-zinc-700 dark:text-zinc-300'
}

function formatDate(iso?: string) {
  if (!iso) return ''
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}
</script>

<template>
  <div class="text-center prose m-auto mb-8">
    <h1 class="mb-0 slide-enter-50">探索实验</h1>
    <p class="op-50 italic mt-2 text-base">
      一些小型交互实验和生成艺术作品。
    </p>
  </div>

  <article>
    <div class="max-w-500 mx-auto slide-enter-content">
      <div class="demos-grid">
        <div
          v-for="(items, idx) of parts"
          :key="idx"
          class="demos-col"
        >
          <a
            v-for="d in items"
            :key="d.name"
            :href="d.href"
            target="_blank"
            rel="noopener"
            class="demo-card slide-enter block no-underline"
            :style="{ '--enter-stage': idx, '--enter-step': '50ms' }"
          >
            <div class="demo-head">
              <i class="i-ri-screenshot-line op-60"></i>
              <span class="demo-title">{{ d.name }}</span>
            </div>
            <div v-if="d.desc" class="demo-desc op-70">{{ d.desc }}</div>
            <div class="demo-meta flex gap-2 items-center justify-between mt-2">
              <div class="flex gap-1 flex-wrap">
                <span
                  v-for="t in d.tags"
                  :key="t"
                  :class="['text-xs rounded px-1.5 py-0.5', tagColor(t)]"
                >#{{ t }}</span>
              </div>
              <span v-if="d.date" class="text-xs op-40 ws-nowrap">{{ formatDate(d.date) }}</span>
            </div>
          </a>
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

<style scoped>
.demos-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 768px) {
  .demos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1280px) {
  .demos-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.demos-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.demo-card {
  border: 1px solid #8883;
  border-radius: 8px;
  padding: 0.875rem 1rem;
  color: inherit;
  background: transparent;
  transition: all 0.2s;
}
.demo-card:hover {
  background: #8881;
  border-color: #8885;
  transform: translateY(-1px);
}
.demo-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.demo-title {
  font-size: 1rem;
}
.demo-desc {
  font-size: 0.85rem;
  line-height: 1.4;
}
</style>
