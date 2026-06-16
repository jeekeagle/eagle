<script setup lang="ts">
/**
 * 常用工具 —— 仿 antfu 的 use.md 结构
 */
const hardware = [
  { name: 'MacBook Pro 14 寸', desc: 'M3 Pro，36GB 内存 —— 主力开发机', current: true },
  { name: 'MacBook Air 13 寸', desc: 'M2，16GB 内存 —— 出差 / 通勤', current: true },
  { name: 'iPhone 15 Pro', desc: '主力手机 + 拍照' },
  { name: 'iPad Air', desc: '看 PDF / 涂鸦' },
  { name: '机械键盘', desc: 'Keychron Q1（茶轴）' },
  { name: '罗技 MX Master 3S', desc: '日常主力鼠标' },
  { name: 'LG UltraFine 5K', desc: '外接显示器' },
  { name: 'Sony WH-1000XM5', desc: '降噪耳机，写代码 / 通勤' },
]

const editor = [
  { name: 'VS Code', desc: '主力编辑器' },
  { name: 'Cursor', desc: 'AI 优先的编辑器，写新项目时切换' },
  { name: 'Zed', desc: '偶尔试用，超轻量' },
]

const browser = [
  { name: 'Arc', desc: '主力浏览器' },
  { name: 'Chrome', desc: '调试 / 兼容测试' },
  { name: 'Safari', desc: 'iOS 调试' },
]

const devTools = [
  { name: 'iTerm2 + tmux', desc: '终端组合' },
  { name: 'Raycast', desc: '启动器 / 剪贴板 / 翻译' },
  { name: 'Linear', desc: '任务管理' },
  { name: 'Figma', desc: '设计' },
  { name: 'Get 笔记', desc: '笔记 + 第二大脑' },
  { name: 'Obsidian', desc: '本地双链笔记' },
]

const aiTools = [
  { name: 'Claude Code', desc: '主力 Agent 编程工具' },
  { name: 'Cursor', desc: 'AI 编辑' },
  { name: 'Midjourney', desc: 'AI 画画主力' },
  { name: 'Stable Diffusion', desc: '本地 AI 画画' },
  { name: 'Get 笔记 AI 搜索', desc: '在我的笔记里做语义搜索' },
]

const cli = [
  { name: 'pnpm', desc: '包管理器' },
  { name: 'ni', desc: '智能的包管理器 wrapper' },
  { name: 'git', desc: '版本控制' },
  { name: 'zsh + oh-my-zsh', desc: 'Shell' },
  { name: 'fzf', desc: '模糊查找' },
  { name: 'bat', desc: '更好的 cat' },
  { name: 'eza', desc: '更好的 ls' },
  { name: 'ripgrep', desc: '更快的 grep' },
]
</script>

<template>
  <div class="text-center prose m-auto mb-8">
    <h1 class="mb-0 slide-enter-50">/use</h1>
    <p class="op-50 italic mt-2 text-base">
      我日常使用的硬件和软件清单。
    </p>
  </div>

  <article>
    <div class="prose m-auto slide-enter-content">
      <h2>硬件</h2>
      <ul>
        <li
          v-for="(h, i) in hardware"
          :key="h.name"
          class="slide-enter"
          :style="{ '--enter-stage': i, '--enter-step': '40ms' }"
        >
          <strong>{{ h.name }}</strong>
          <span v-if="h.current" class="text-xs ml-1 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 rounded px-1.5 py-0.5">主力</span>
          —
          <span class="op-75">{{ h.desc }}</span>
        </li>
      </ul>

      <h2>编辑器</h2>
      <ul>
        <li
          v-for="(e, i) in editor"
          :key="e.name"
          class="slide-enter"
          :style="{ '--enter-stage': i, '--enter-step': '40ms' }"
        >
          <strong>{{ e.name }}</strong> — <span class="op-75">{{ e.desc }}</span>
        </li>
      </ul>

      <h2>浏览器</h2>
      <ul>
        <li
          v-for="(b, i) in browser"
          :key="b.name"
          class="slide-enter"
          :style="{ '--enter-stage': i, '--enter-step': '40ms' }"
        >
          <strong>{{ b.name }}</strong> — <span class="op-75">{{ b.desc }}</span>
        </li>
      </ul>

      <h2>开发工具</h2>
      <ul>
        <li
          v-for="(d, i) in devTools"
          :key="d.name"
          class="slide-enter"
          :style="{ '--enter-stage': i, '--enter-step': '40ms' }"
        >
          <strong>{{ d.name }}</strong> — <span class="op-75">{{ d.desc }}</span>
        </li>
      </ul>

      <h2>AI 工具</h2>
      <ul>
        <li
          v-for="(a, i) in aiTools"
          :key="a.name"
          class="slide-enter"
          :style="{ '--enter-stage': i, '--enter-step': '40ms' }"
        >
          <strong>{{ a.name }}</strong> — <span class="op-75">{{ a.desc }}</span>
        </li>
      </ul>

      <h2>命令行</h2>
      <ul>
        <li
          v-for="(c, i) in cli"
          :key="c.name"
          class="slide-enter"
          :style="{ '--enter-stage': i, '--enter-step': '40ms' }"
        >
          <code>{{ c.name }}</code> — <span class="op-75">{{ c.desc }}</span>
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
