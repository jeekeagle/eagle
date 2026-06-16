/**
 * 博客文章数据（中文）
 */
export interface Post {
  slug: string
  title: string
  date: string
  readTime?: number // 阅读时长（分钟）
  tags?: string[]
  lang?: 'zh' | 'en'
  desc?: string
  content?: string
  draft?: boolean
  redirect?: string
}

export const posts: Post[] = [
  {
    slug: 'qing-zhu-yi-xia',
    title: '自我介绍',
    date: '2025-12-01',
    readTime: 3,
    tags: ['随笔'],
    lang: 'zh',
    desc: '关于我是谁、在做什么的一份简要说明。',
  },
  {
    slug: 'one-person-company',
    title: 'OPC：一个人 + Agent = 一家公司',
    date: '2025-11-20',
    readTime: 9,
    tags: ['AI', 'Agent', '思考'],
    lang: 'zh',
    desc: 'AI Agent 时代下，一个人如何借助工具完成过去需要团队才能做的事。',
  },
  {
    slug: 'second-brain-with-getnote',
    title: '用 Get 笔记搭建我的第二大脑',
    date: '2025-10-12',
    readTime: 7,
    tags: ['笔记', '方法论'],
    lang: 'zh',
    desc: '我是怎么用 Get 笔记 + 双链 + 标签系统，把日常思考变成可回溯资产的。',
  },
  {
    slug: 'agent-architecture',
    title: 'Agent 架构：从 Prompt 到自治系统',
    date: '2025-08-30',
    readTime: 12,
    tags: ['AI', 'Agent', '架构'],
    lang: 'zh',
    desc: '梳理当下主流 Agent 架构的层次、组件和设计模式。',
  },
  {
    slug: 'da-jian-ge-ren-zhan',
    title: '用 Vue + UnoCSS 搭建个人站点',
    date: '2025-09-15',
    readTime: 8,
    tags: ['Vue', 'UnoCSS', 'Web'],
    lang: 'zh',
    desc: '记录我从零搭建个人站的过程，灵感来自 antfu.me。',
  },
  {
    slug: 'ai-painting-daily',
    title: '每天画一张：AI 画画三个月小结',
    date: '2025-08-04',
    readTime: 6,
    tags: ['AI 画画', '随笔'],
    lang: 'zh',
    desc: '坚持 90 天每天一张 AI 画画，回头看自己审美变化的几点感受。',
  },
  {
    slug: 'parenting-with-notes',
    title: '用笔记记录女儿的成长',
    date: '2025-07-18',
    readTime: 5,
    tags: ['育儿', '笔记'],
    lang: 'zh',
    desc: '"童话小镇"是给女儿的笔记站，这里写它是怎么诞生的。',
  },
  {
    slug: 'she-ji-ti-xi-bi-ji',
    title: '设计体系随笔',
    date: '2025-06-20',
    readTime: 6,
    tags: ['设计'],
    lang: 'zh',
    desc: '关于构建企业级设计体系的几点心得。',
  },
  {
    slug: 'zu-jian-hua-si-wei',
    title: '组件化思维',
    date: '2025-03-04',
    readTime: 5,
    tags: ['前端', 'Vue'],
    lang: 'zh',
    desc: '我在 Vue 项目里组织组件的几个原则。',
  },
  {
    slug: 'travel-qingdao',
    title: '在青岛：用脚步丈量一座城市',
    date: '2024-10-15',
    readTime: 8,
    tags: ['旅行', '随笔'],
    lang: 'zh',
    desc: '作为一个搬到青岛的"新本地人"，我走了哪些地方。',
  },
  {
    slug: 'kai-yuan-ke-chi-xu',
    title: '谈谈开源可持续性',
    date: '2024-11-12',
    readTime: 7,
    tags: ['开源'],
    lang: 'zh',
    desc: '关于开源项目资助与维护的一点思考。',
  },
  {
    slug: 'chuan-shuo-de-yi-zhu',
    title: '发布是一门艺术',
    date: '2024-07-30',
    readTime: 4,
    tags: ['方法论'],
    lang: 'zh',
    desc: '为什么「做完」比「完美」更重要。',
  },
]

// 标签对应的颜色（用于 pill 着色）
export const tagColors: Record<string, string> = {
  AI: 'bg-violet-500/15 text-violet-700 dark:text-violet-300',
  Agent: 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300',
  架构: 'bg-blue-500/15 text-blue-700 dark:text-blue-300',
  前端: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
  Vue: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
  UnoCSS: 'bg-sky-500/15 text-sky-700 dark:text-sky-300',
  Web: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300',
  笔记: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
  方法论: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
  设计: 'bg-rose-500/15 text-rose-700 dark:text-rose-300',
  开源: 'bg-teal-500/15 text-teal-700 dark:text-teal-300',
  育儿: 'bg-pink-500/15 text-pink-700 dark:text-pink-300',
  旅行: 'bg-orange-500/15 text-orange-700 dark:text-orange-300',
  随笔: 'bg-stone-500/15 text-stone-700 dark:text-stone-300',
  思考: 'bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300',
  'AI 画画': 'bg-pink-500/15 text-pink-700 dark:text-pink-300',
}

export function tagColor(tag: string): string {
  return tagColors[tag] || 'bg-zinc-500/15 text-zinc-700 dark:text-zinc-300'
}
