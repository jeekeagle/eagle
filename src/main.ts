import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './styles/main.css'

const Home = () => import('./pages/index.vue')
const Posts = () => import('./pages/posts.vue')
const Post = () => import('./pages/post.vue')
const Projects = () => import('./pages/projects.vue')
const Talks = () => import('./pages/talks.vue')
const Sponsors = () => import('./pages/sponsors-list.vue')
const Photos = () => import('./pages/photos.vue')
const Demos = () => import('./pages/demos.vue')
const Podcasts = () => import('./pages/podcasts.vue')
const Use = () => import('./pages/use.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/posts', component: Posts },
    { path: '/posts/:slug', component: Post, props: true },
    { path: '/projects', component: Projects },
    { path: '/talks', component: Talks },
    { path: '/sponsors-list', component: Sponsors },
    { path: '/photos', component: Photos },
    { path: '/demos', component: Demos },
    { path: '/podcasts', component: Podcasts },
    { path: '/use', component: Use },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

createApp(App).use(router).mount('#app')
