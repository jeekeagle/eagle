<script setup lang="ts">
import { profile } from '../data/profile'
import MagicLink from '../components/MagicLink.vue'

const year = new Date().getFullYear()
</script>

<template>
  <div class="prose m-auto mb-8">
    <h1 class="mb-0 slide-enter-50">{{ profile.name }}</h1>
  </div>

  <article>
    <div class="prose m-auto slide-enter-content">
      <p>{{ profile.bio }}</p>

      <p>
        Working at
        <MagicLink
          v-for="w in profile.work"
          :key="w.name"
          :href="w.href"
          :avatar="w.avatar"
          :name="w.name"
        />
        <br />
        Creator of
        <MagicLink
          v-for="c in profile.creator"
          :key="c.name"
          :href="c.href"
          :avatar="c.avatar"
          :name="c.name"
        />
        <br />
        Core team of
        <MagicLink
          v-for="c in profile.coreTeam"
          :key="c.name"
          :href="c.href"
          :avatar="c.avatar"
          :name="c.name"
        />
        <br />
        Maintaining
        <MagicLink
          v-for="m in profile.maintaining"
          :key="m.name"
          :href="m.href"
          :avatar="m.avatar"
          :name="m.name"
        />
      </p>

      <p>
        Dreaming up cool ideas and making them come true is where my passion lies.
        I am enthusiastic about building tools that help myself and others to be more
        productive and enjoy the process of crafting. You can find my
        <router-link to="/projects">full projects list here</router-link>.
      </p>

      <p>
        I give
        <router-link to="/talks">talks</router-link>
        and write
        <router-link to="/posts">blog posts</router-link>
        about open source, coding, etc. I co-host a podcast
        <a href="https://example.com" target="_blank" rel="noopener"><em>Podcast Name</em></a>
        <span class="op75">(placeholder)</span>.
        Occasionally, I do live coding streams on
        <a href="https://youtube.com" target="_blank" rel="noopener">YouTube</a>.
      </p>

      <p>
        Outside of programming, I enjoy doing photography and traveling. I post
        <router-link to="/photos">photos on this page</router-link>.
        In case you are interested, here are the
        <router-link to="/use">hardware/software I use</router-link>.
      </p>

      <div class="flex-auto"></div>

      <hr />

      <p>Find me on</p>
      <p class="mt--2! flex flex-wrap gap-2">
        <a
          v-for="s in profile.socials"
          :key="s.name"
          :href="s.href"
          target="_blank"
          rel="noopener"
        >
          <span class="op75" :class="s.icon"></span>
          {{ s.name }}
        </a>
      </p>
      <p>
        Or mail me at
        <span class="font-mono">hi<span class="i-carbon-at"></span>{{ profile.domain }}</span>
      </p>

      <hr />

      <p>
        If you enjoy my work and find them useful, consider sponsoring me and the
        ecosystem to help Open Source sustainable. Thank you!
      </p>

      <p class="flex flex-wrap items-center gap-2">
        <a
          v-for="sp in profile.sponsors"
          :key="sp.name"
          :href="sp.href"
          target="_blank"
          rel="noopener"
          :class="sp.class"
        >
          <i :class="[sp.icon, 'group-hover:scale-110']"></i>
          {{ sp.name }}
        </a>
      </p>
    </div>
  </article>

  <div class="mt-10 mb-6 prose m-auto flex slide-enter animate-delay-1200 copyright">
    <span class="text-sm op50">
      <a
        target="_blank"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        style="color: inherit"
      >CC BY-NC-SA 4.0</a>
      2021-{{ year }} © {{ profile.name }}
    </span>
    <div class="flex-auto"></div>
  </div>
</template>
