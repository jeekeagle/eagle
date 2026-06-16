/**
 * 博客文章数据
 * date 使用 ISO 字符串
 */
export interface Post {
  slug: string
  title: string
  date: string
  readTime?: number // minutes
  tags?: string[]
  lang?: 'en' | 'zh' | 'ja'
  desc?: string
  content?: string
}

export const posts: Post[] = [
  {
    slug: 'introducing-myself',
    title: 'Introducing Myself',
    date: '2025-12-01',
    readTime: 3,
    tags: ['meta'],
    desc: 'A quick intro to who I am and what I work on.',
  },
  {
    slug: 'building-my-personal-site',
    title: 'Building My Personal Site with Vue + UnoCSS',
    date: '2025-09-15',
    readTime: 8,
    tags: ['vue', 'unocss', 'web'],
    desc: 'Notes on rebuilding my personal site, inspired by antfu.me.',
  },
  {
    slug: 'notes-on-design-systems',
    title: 'Notes on Design Systems',
    date: '2025-06-20',
    readTime: 6,
    tags: ['design'],
    desc: 'A few things I learned shipping design systems at scale.',
  },
  {
    slug: 'thinking-in-components',
    title: 'Thinking in Components',
    date: '2025-03-04',
    readTime: 5,
    tags: ['frontend'],
    desc: 'How I structure components in modern Vue apps.',
  },
  {
    slug: 'on-open-source-sustainability',
    title: 'On Open Source Sustainability',
    date: '2024-11-12',
    readTime: 7,
    tags: ['oss'],
    desc: 'Some thoughts on funding and maintaining OSS.',
  },
  {
    slug: 'the-art-of-shipping',
    title: 'The Art of Shipping',
    date: '2024-07-30',
    readTime: 4,
    tags: ['process'],
    desc: 'Why finishing beats perfecting.',
  },
]

export const talks: Post[] = [
  {
    slug: 'design-engineering',
    title: 'Design Engineering at Scale',
    date: '2025-10-12',
    tags: ['talk'],
  },
  {
    slug: 'building-with-vue',
    title: 'Building Modern Apps with Vue',
    date: '2025-04-20',
    tags: ['talk'],
  },
  {
    slug: 'open-source-stories',
    title: 'Open Source Stories',
    date: '2024-11-08',
    tags: ['talk'],
  },
  {
    slug: 'shipping-fast',
    title: 'Shipping Fast, Shipping Often',
    date: '2024-05-30',
    tags: ['talk'],
  },
]
