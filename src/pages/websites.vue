<script setup lang="ts">
/**
 * 网站 —— 我做过的 / 在维护的一些站点
 */
const sites = [
  { name: '本主页', desc: 'Eagle · 个人主页（这个站）。', href: '#', tags: ['本站'] },
  { name: 'SkillsHub', desc: '把 AI 工具与工作流收纳在一个入口。', href: '#', tags: ['规划中'] },
  { name: '女儿的"童话小镇"', desc: '记录女儿成长的笔记站。', href: '#', tags: ['私人'] },
  { name: 'AI 画画画廊', desc: '把每天生成的 AI 画收集起来。', href: '#', tags: ['规划中'] },
]
</script>

<template>
  <div class="text-center prose m-auto mb-8">
    <h1 class="mb-0 slide-enter-50">网站</h1>
  </div>

  <article>
    <div class="prose m-auto slide-enter-content">
      <p class="op50 italic">
        我搭过或在维护的小站点合集。
      </p>
      <hr />

      <ul>
        <li
          v-for="(s, i) in sites"
          :key="s.name"
          class="slide-enter flex flex-col gap-2 mb-4"
          :style="{ '--enter-stage': i, '--enter-step': '50ms' }"
        >
          <a :href="s.href" target="_blank" rel="noopener" class="!border-none flex items-center gap-2">
            <i class="i-ri-global-line op60"></i>
            <span class="font-semibold">{{ s.name }}</span>
          </a>
          <p class="op75 ml-6 mt-0">{{ s.desc }}</p>
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
