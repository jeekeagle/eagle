/**
 * 项目数据
 */
export interface Project {
  name: string
  desc: string
  icon: string
  href: string
  current?: boolean // 是否为"Current Focus"
}

export const currentFocus: Project[] = [
  { name: 'Project Alpha', desc: 'The thing I am currently building.', icon: 'i-ph-rocket-launch-duotone', href: '#', current: true },
  { name: 'Project Beta', desc: 'Another focus area right now.', icon: 'i-ri-lightbulb-line', href: '#', current: true },
  { name: 'Project Gamma', desc: 'Side focus I tend to.', icon: 'i-ri-flask-line', href: '#', current: true },
]

export const projects: Project[] = [
  { name: 'Vitest', desc: 'A blazing-fast unit test framework.', icon: 'i-ri-test-tube-line', href: 'https://vitest.dev' },
  { name: 'Slidev', desc: 'Presentation slides for developers.', icon: 'i-ri-slideshow-line', href: 'https://sli.dev' },
  { name: 'VueUse', desc: 'Collection of essential Vue Composition utilities.', icon: 'i-ri-tools-line', href: 'https://vueuse.org' },
  { name: 'UnoCSS', desc: 'The instant on-demand atomic CSS engine.', icon: 'i-ri-css3-line', href: 'https://unocss.dev' },
  { name: 'Elk', desc: 'A nimble Mastodon web client.', icon: 'i-ri-mastodon-line', href: 'https://elk.zone' },
  { name: 'Type Challenges', desc: 'Collection of TypeScript type challenges.', icon: 'i-simple-icons-typescript', href: 'https://tsch.js.org' },
  { name: 'Shiki', desc: 'A beautiful syntax highlighter.', icon: 'i-ri-code-box-line', href: 'https://shiki.style' },
  { name: 'Twoslash', desc: 'Hoverable markdown code samples.', icon: 'i-ri-cursor-line', href: 'https://shiki.style/packages/twoslash' },
  { name: 'ESLint Stylistic', desc: 'ESLint stylistic formatting rules.', icon: 'i-simple-icons-eslint', href: 'https://eslint.style' },
  { name: 'Nuxt', desc: 'The Intuitive Vue Framework.', icon: 'i-simple-icons-nuxt', href: 'https://nuxt.com' },
  { name: 'Vite', desc: 'Next generation frontend tooling.', icon: 'i-simple-icons-vite', href: 'https://vitejs.dev' },
  { name: 'Vue', desc: 'The Progressive JavaScript Framework.', icon: 'i-simple-icons-vuedotjs', href: 'https://vuejs.org' },
]
