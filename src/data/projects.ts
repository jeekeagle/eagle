/**
 * 项目数据（中文）—— 按 antfu 风格分门别类
 */
export interface Project {
  name: string
  desc: string
  icon: string
  href: string
  current?: boolean
}

// 按分类组织 —— key 是分类名，value 是项目列表
export const projectGroups: Record<string, Project[]> = {
  '当前焦点': [
    { name: 'Eagle', desc: '这个个人主页本身：Vue 3 + Vite + UnoCSS。', icon: 'i-ri-eagle-line', href: 'https://github.com/jeekeagle/eagle' },
    { name: 'SkillsHub', desc: '把 AI 工具与工作流收纳在一个入口。', icon: 'i-ri-stack-line', href: '#' },
    { name: '童话小镇', desc: '记录女儿成长的小站。', icon: 'i-ri-home-heart-line', href: '#' },
  ],

  'AI 与 Agent': [
    { name: 'Get 笔记 CLI 扩展', desc: '在终端里直接搜索、调取我的笔记。', icon: 'i-simple-icons-bijimd', href: 'https://www.biji.com' },
    { name: 'Agent Skill 套件', desc: '把高频 Prompt / 工具调用沉淀成可复用 Skill。', icon: 'i-ri-robot-line', href: '#' },
    { name: 'AI 画画画廊', desc: '把每天生成的 AI 画收集起来。', icon: 'i-ri-palette-line', href: '#' },
  ],

  '前端工具链': [
    { name: 'Vue 3', desc: '渐进式 JavaScript 框架。', icon: 'i-simple-icons-vuedotjs', href: 'https://vuejs.org' },
    { name: 'Vite', desc: '下一代前端构建工具。', icon: 'i-simple-icons-vite', href: 'https://vitejs.dev' },
    { name: 'UnoCSS', desc: '即时按需的原子化 CSS 引擎。', icon: 'i-simple-icons-unocss', href: 'https://unocss.dev' },
    { name: 'Nuxt', desc: '直观的 Vue 全栈框架。', icon: 'i-simple-icons-nuxt', href: 'https://nuxt.com' },
  ],

  '内容与创作': [
    { name: '霞鹜文楷', desc: '本站使用的中文开源字体。', icon: 'i-ri-font-size-2', href: 'https://github.com/lxgw/LxgwWenkaiTC' },
    { name: 'LXGW 霞鹜文楷 Mono', desc: '等宽版本，代码块也用它。', icon: 'i-ri-code-line', href: 'https://github.com/lxgw/LxgwWenkaiTC' },
    { name: 'antfu.me', desc: '本主页结构灵感来源。', icon: 'i-simple-icons-antdesign', href: 'https://antfu.me' },
  ],

  '日常工具': [
    { name: 'Get 笔记', desc: 'AI 时代的笔记工具。', icon: 'i-simple-icons-bijimd', href: 'https://www.biji.com' },
    { name: 'Raycast', desc: 'Mac 上的效率启动器。', icon: 'i-simple-icons-raycast', href: 'https://raycast.com' },
    { name: 'VS Code', desc: '主力编辑器。', icon: 'i-simple-icons-visualstudiocode', href: 'https://code.visualstudio.com' },
    { name: 'Obsidian', desc: '本地双链笔记。', icon: 'i-simple-icons-obsidian', href: 'https://obsidian.md' },
  ],
}

// 兼容旧 API
export const currentFocus: Project[] = projectGroups['当前焦点']
export const projects: Project[] = Object.values(projectGroups)
  .flat()
  .filter(p => !projectGroups['当前焦点'].includes(p))
