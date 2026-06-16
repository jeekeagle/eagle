<script setup lang="ts">
/**
 * Hardware/Software I use
 * 列出来你的开发环境配置
 */
const hardware = [
  { name: 'MacBook Pro 14"', desc: 'M3 Pro, 36GB RAM' },
  { name: 'Mechanical Keyboard', desc: 'Keychron Q1' },
  { name: 'Logitech MX Master 3S', desc: 'Daily driver mouse' },
  { name: 'LG UltraFine 5K', desc: 'External display' },
]

const software = [
  { name: 'VS Code / Cursor', desc: 'Editor' },
  { name: 'iTerm2 + tmux', desc: 'Terminal' },
  { name: 'Raycast', desc: 'Launcher' },
  { name: 'Figma', desc: 'Design' },
  { name: 'Arc', desc: 'Browser' },
  { name: 'Linear', desc: 'Issues' },
  { name: 'Notion', desc: 'Notes' },
]
</script>

<template>
  <div class="text-center prose m-auto mb-8">
    <h1 class="mb-0 slide-enter-50">/use</h1>
  </div>

  <article>
    <div class="prose m-auto slide-enter-content">
      <p class="op50 italic">
        Hardware and software I use on a daily basis.
      </p>
      <hr />

      <h2>Hardware</h2>
      <ul>
        <li
          v-for="(h, i) in hardware"
          :key="h.name"
          class="slide-enter"
          :style="{ '--enter-stage': i, '--enter-step': '50ms' }"
        >
          <strong>{{ h.name }}</strong> — <span class="op75">{{ h.desc }}</span>
        </li>
      </ul>

      <h2>Software</h2>
      <ul>
        <li
          v-for="(s, i) in software"
          :key="s.name"
          class="slide-enter"
          :style="{ '--enter-stage': i, '--enter-step': '50ms' }"
        >
          <strong>{{ s.name }}</strong> — <span class="op75">{{ s.desc }}</span>
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
