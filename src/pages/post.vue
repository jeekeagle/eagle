<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { posts } from '../data/posts'

const route = useRoute()
const router = useRouter()

const post = computed(() => posts.find(p => p.slug === route.params.slug))

if (!post.value) {
  router.push('/posts')
}
</script>

<template>
  <article>
    <div class="prose m-auto slide-enter-content">
      <div class="prose m-auto mt-8 mb-8 slide-enter animate-delay-500">
        <br />
        <span class="font-mono op50">&gt; </span>
        <router-link to="/posts" class="font-mono op50 hover:op75">back</router-link>
      </div>

      <div v-if="post">
        <h1>{{ post.title }}</h1>
        <p class="op50 text-sm">
          {{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
          <span v-if="post.readTime"> · {{ post.readTime }} min read</span>
        </p>

        <p v-if="post.desc" class="italic op75">{{ post.desc }}</p>

        <hr />

        <p>
          This is a placeholder post body. In your real site, render MD/MDX
          content here. Common approaches:
        </p>
        <ul>
          <li>Use <code>unplugin-vue-markdown</code> for <code>.md</code> imports</li>
          <li>Use <code>@nuxt/content</code> if migrating to Nuxt</li>
          <li>Use Vite's <code>?raw</code> import and a markdown renderer</li>
        </ul>

        <p>
          Or just write inline content in a <code>&lt;script setup&gt;</code> file.
          Each post is a single Vue route with full type safety.
        </p>
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
      2021-{{ new Date().getFullYear() }} © Your Name
    </span>
    <div class="flex-auto"></div>
  </div>
</template>
