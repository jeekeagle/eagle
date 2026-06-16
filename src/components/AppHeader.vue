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
      <!-- Eagle logo：简洁的鹰剪影 -->
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full"
        aria-hidden="true"
      >
        <title>Eagle</title>
        <!-- 主体剪影 + 头向右 -->
        <path
          class="logo-path"
          d="M32 8
             C 26 14, 22 18, 18 20
             C 14 22, 9 22, 6 24
             C 11 26, 16 28, 20 32
             C 16 34, 12 38, 9 42
             C 14 42, 19 41, 24 40
             C 22 44, 20 48, 19 52
             C 24 50, 28 47, 32 44
             C 36 47, 40 50, 45 52
             C 44 48, 42 44, 40 40
             C 45 41, 50 42, 55 42
             C 52 38, 48 34, 44 32
             C 48 28, 53 26, 58 24
             C 55 22, 50 22, 46 20
             C 42 18, 38 14, 32 8 Z"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        />
        <!-- 头部点缀（眼睛方向） -->
        <circle
          class="logo-eye"
          cx="48"
          cy="20"
          r="1.2"
        />
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
