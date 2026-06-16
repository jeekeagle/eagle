<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useColorScheme } from '../composables/useColorScheme'

const { toggle } = useColorScheme()
const showScrollTop = ref(false)
const isMobile = ref(false)

const navItems = [
  { to: '/bookmarks', title: '保存', icon: 'i-ri-bookmark-line', text: '保存' },
  { to: '/posts', title: '博客', icon: 'i-ri-article-line', text: '博客' },
  { to: '/projects', title: '项目', icon: 'i-ri-lightbulb-line', text: '项目' },
  { to: '/websites', title: '网站', icon: 'i-ri-global-line', text: '网站' },
  { to: '/photos', title: '摄影', icon: 'i-ri-camera-3-line', text: '摄影' },
  { to: '/paintings', title: '绘画', icon: 'i-ri-palette-line', text: '绘画' },
  { to: '/demos', title: '探索实验', icon: 'i-ri-screenshot-line', text: '探索实验' },
]

function updateBreakpoint() {
  isMobile.value = window.innerWidth < 768
}

function handleScroll() {
  showScrollTop.value = window.scrollY > 200
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateBreakpoint()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', updateBreakpoint)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateBreakpoint)
})
</script>

<template>
  <header class="app-header">
    <router-link
      to="/"
      class="app-logo"
      focusable="false"
      aria-label="返回首页"
      title="Yiguo · 个人主页"
    >
      <!-- Eagle logo：手绘风的鹰剪影 + 笔画动画 -->
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full"
        aria-hidden="true"
      >
        <title>Eagle</title>
        <!-- 主体：展翅的鹰（侧面，头朝右） -->
        <path
          class="logo-path"
          d="
            M 30 55
            C 28 50, 30 45, 35 42
            C 40 39, 46 38, 50 40
            C 54 38, 60 39, 65 42
            C 70 45, 72 50, 70 55
            C 72 50, 75 42, 78 36
            C 80 32, 82 30, 80 28
            C 76 30, 72 34, 68 40
            C 72 36, 76 30, 78 24
            C 78 22, 76 22, 74 24
            C 70 28, 64 36, 60 42
            C 62 38, 64 32, 64 26
            C 64 22, 62 22, 60 26
            C 58 30, 54 36, 52 42
            C 52 38, 52 32, 52 26
            C 52 22, 50 22, 48 26
            C 48 30, 48 36, 48 42
            C 46 36, 42 30, 40 26
            C 38 22, 36 22, 36 26
            C 36 32, 38 38, 40 42
            C 36 36, 30 28, 26 24
            C 24 22, 22 22, 22 24
            C 24 30, 28 36, 32 40
            C 28 34, 24 30, 20 28
            C 18 30, 20 32, 22 36
            C 25 42, 28 50, 30 55
            Z
            M 30 55
            C 32 60, 36 65, 40 68
            C 44 70, 48 71, 50 70
            C 52 71, 56 70, 60 68
            C 64 65, 68 60, 70 55
            C 68 62, 64 68, 60 72
            C 56 76, 52 78, 50 78
            C 48 78, 44 76, 40 72
            C 36 68, 32 62, 30 55
            Z
          "
          stroke-width="1.6"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <!-- 眼睛：右侧头部 -->
        <circle class="logo-eye" cx="64" cy="44" r="0.9" />
      </svg>
    </router-link>

    <button
      title="回到顶部"
      class="scroll-top-btn"
      :class="{ visible: showScrollTop }"
      @click="scrollToTop"
    >
      <i class="i-ri-arrow-up-line" />
    </button>

    <nav class="app-nav">
      <div class="spacer" />
      <div class="app-nav-right print:hidden">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :title="item.title"
        >
          <span v-if="!isMobile || !item.icon">
            {{ item.text }}
          </span>
          <i
            v-if="isMobile"
            :class="item.icon"
          />
        </router-link>

        <a
          href="https://github.com/jeekeagle"
          target="_blank"
          title="GitHub"
          class="hidden md:inline-flex"
        >
          <i class="i-uil-github-alt" />
        </a>

        <a
          class="cursor-pointer select-none"
          title="切换深色 / 浅色"
          @click.prevent="toggle"
        >
          <i class="i-ri-sun-line dark:i-ri-moon-line" />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.logo-eye {
  fill: currentColor;
  opacity: 0.7;
}
</style>
