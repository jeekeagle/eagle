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
}

export const posts: Post[] = [
  {
    slug: 'qing-zhu-yi-xia',
    title: '自我介绍',
    date: '2025-12-01',
    readTime: 3,
    tags: ['随笔'],
    desc: '关于我是谁、在做什么的一份简要说明。',
  },
  {
    slug: 'da-jian-ge-ren-zhan',
    title: '用 Vue + UnoCSS 搭建个人站点',
    date: '2025-09-15',
    readTime: 8,
    tags: ['Vue', 'UnoCSS', 'Web'],
    desc: '记录我从零搭建个人站的过程，灵感来自 antfu.me。',
  },
  {
    slug: 'ai-agent-shi-dai-de-gong-cheng-shi',
    title: 'AI Agent 时代的工程师',
    date: '2025-08-10',
    readTime: 10,
    tags: ['AI', 'Agent'],
    desc: '一个工程师如何借助 Agent 变成「一人公司」。',
  },
  {
    slug: 'ge-ren-zhi-shi-guan-li',
    title: '个人知识管理：把思考变成可回溯的资产',
    date: '2025-07-22',
    readTime: 7,
    tags: ['笔记', '方法论'],
    desc: '我用 Get 笔记 + 双链构建自己的第二大脑。',
  },
  {
    slug: 'she-ji-ti-xi-bi-ji',
    title: '设计体系随笔',
    date: '2025-06-20',
    readTime: 6,
    tags: ['设计'],
    desc: '关于构建企业级设计体系的几点心得。',
  },
  {
    slug: 'zu-jian-hua-si-wei',
    title: '组件化思维',
    date: '2025-03-04',
    readTime: 5,
    tags: ['前端'],
    desc: '我在 Vue 项目里组织组件的几个原则。',
  },
]
