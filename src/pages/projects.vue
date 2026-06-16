<script setup lang="ts">
import { computed } from 'vue'
import { projectGroups } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'

const groupKeys = computed(() => Object.keys(projectGroups))

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\/]+/g, '-')
}
</script>

<template>
  <article>
    <div>
      <div class="max-w-300 mx-auto">
        <p class="text-center mt--6 mb-5 op50 text-lg italic">
          我创建、维护或重度依赖的项目。
        </p>

        <div class="prose pb-5 mx-auto mt-10 text-center">
          <div class="flex gap-2 justify-center flex-wrap">
            <a
              href="https://github.com/jeekeagle"
              target="_blank"
              class="btn-blue inline-block"
            >
              <i class="i-uil-github-alt"></i> GitHub
            </a>
            <a href="#" class="btn-amber inline-block">
              <i class="i-ph-rocket-launch-duotone"></i> 最近发布
            </a>
            <a href="#" class="btn-lime inline-block">
              <i class="i-ph-star-duotone"></i> 按 Star 排序
            </a>
          </div>
          <hr />
        </div>

        <!-- 分类分组 -->
        <div
          v-for="(key, cidx) in groupKeys"
          :key="key"
          :id="slug(key)"
          slide-enter
          :style="{ '--enter-stage': cidx + 1, '--enter-step': '60ms' }"
        >
          <div
            class="select-none relative h-18 mt-5 pointer-events-none slide-enter"
            :style="{ '--enter-stage': cidx - 2, '--enter-step': '60ms' }"
          >
            <span
              class="text-5em color-transparent absolute left--1rem top-0rem font-bold leading-1em stroke-text-1.5 stroke-text-hex-aaa op35 dark:op20"
            >{{ key }}</span>
          </div>
          <div
            class="project-grid py-2 max-w-500 w-max mx-auto"
          >
            <ProjectCard
              v-for="(p, i) in projectGroups[key]"
              :key="p.name"
              v-bind="p"
              class="slide-enter"
              :style="{ '--enter-stage': 2 + i, '--enter-step': '40ms' }"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 侧栏目录（桌面端） -->
    <div class="project-toc">
      <div class="project-toc-anchor">
        <i class="i-ri-menu-2-fill"></i>
      </div>
      <ul>
        <li v-for="key of groupKeys" :key="key">
          <a :href="`#${slug(key)}`">{{ key }}</a>
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
