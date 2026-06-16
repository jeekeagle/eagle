<script setup lang="ts">
/**
 * 保存 —— 收藏的文章 / 工具 / 灵感
 */
const bookmarks = [
  { name: 'Antfu 的博客', desc: '开源与设计灵感的源头。', href: 'https://antfu.me', tags: ['博客'] },
  { name: 'Vue 官方文档', desc: 'Vue 3 组合式 API。', href: 'https://cn.vuejs.org', tags: ['前端'] },
  { name: 'Vite 中文站', desc: '下一代构建工具。', href: 'https://cn.vitejs.dev', tags: ['前端'] },
  { name: 'Unocss 官网', desc: '原子化 CSS。', href: 'https://unocss.dev', tags: ['CSS'] },
  { name: 'LXGW 霞鹜文楷', desc: '开源中文字体，本站使用。', href: 'https://github.com/lxgw/LxgwWenkaiTC', tags: ['字体'] },
  { name: 'Get 笔记', desc: 'AI 时代的笔记工具。', href: 'https://www.biji.com', tags: ['笔记'] },
]
</script>

<template>
  <div class="text-center prose m-auto mb-8">
    <h1 class="mb-0 slide-enter-50">保存</h1>
  </div>

  <article>
    <div class="prose m-auto slide-enter-content">
      <p class="op50 italic">
        我日常收藏的文章、工具与灵感。
      </p>
      <hr />

      <ul>
        <li
          v-for="(b, i) in bookmarks"
          :key="b.name"
          class="slide-enter flex flex-col gap-2 mb-4"
          :style="{ '--enter-stage': i, '--enter-step': '50ms' }"
        >
          <a :href="b.href" target="_blank" rel="noopener" class="!border-none flex items-center gap-2">
            <i class="i-ri-bookmark-line op60"></i>
            <span class="font-semibold">{{ b.name }}</span>
          </a>
          <p class="op75 ml-6 mt-0">{{ b.desc }}</p>
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
      2021-{{ new Date().getFullYear() }} © Yiguo
    </span>
    <div class="flex-auto"></div>
  </div>
</template>
