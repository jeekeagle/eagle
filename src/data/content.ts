/**
 * 照片 + 绘画 + Demos + 书签 + 网站 数据（中文）
 */

export interface Photo {
  id: string
  title: string
  date: string
  // 留空：本地站不放真实图，使用占位色块
  color?: string
  tags?: string[]
}

// 按分类组织
export const photoGroups: Record<string, Photo[]> = {
  '青岛': [
    { id: 'qd1', title: '栈桥日出', date: '2025-12-08', color: '#f59e0b', tags: ['日出'] },
    { id: 'qd2', title: '老街巷子', date: '2025-10-21', color: '#64748b', tags: ['街巷'] },
    { id: 'qd3', title: '海风咖啡', date: '2025-09-14', color: '#92400e', tags: ['咖啡'] },
    { id: 'qd4', title: '崂山林间', date: '2025-06-10', color: '#15803d', tags: ['山'] },
    { id: 'qd5', title: '海雾清晨', date: '2024-11-02', color: '#0e7490', tags: ['雾'] },
  ],
  '城市': [
    { id: 'c1', title: '城市灯火', date: '2025-08-02', color: '#1e3a8a', tags: ['夜景'] },
    { id: 'c2', title: '春日繁花', date: '2024-04-08', color: '#db2777', tags: ['花'] },
    { id: 'c3', title: '雪后屋顶', date: '2025-02-04', color: '#cbd5e1', tags: ['雪'] },
  ],
  '雾中西湖': [
    { id: 'h1', title: '断桥残雪', date: '2024-12-15', color: '#0e7490', tags: ['西湖'] },
  ],
}

export interface Painting {
  id: string
  title: string
  date: string
  color?: string
  tags?: string[]
  tool?: string
}

export const paintingGroups: Record<string, Painting[]> = {
  'AI 画画': [
    { id: 'pa1', title: '窗台上的日落', date: '2025-12-04', color: '#f59e0b', tool: 'Midjourney', tags: ['风景'] },
    { id: 'pa2', title: '雨夜街角', date: '2025-11-21', color: '#0e7490', tool: 'Midjourney', tags: ['夜景'] },
    { id: 'pa3', title: '山与海之间', date: '2025-11-05', color: '#15803d', tool: 'SD', tags: ['风景'] },
    { id: 'pa4', title: '童话小镇 · 入口', date: '2025-10-18', color: '#db2777', tool: 'Midjourney', tags: ['童话'] },
    { id: 'pa5', title: '机器人在发呆', date: '2025-10-02', color: '#6366f1', tool: 'Midjourney', tags: ['科幻'] },
    { id: 'pa6', title: '清晨咖啡', date: '2025-09-19', color: '#92400e', tool: 'SD', tags: ['静物'] },
    { id: 'pa7', title: '女儿的小猫', date: '2025-09-05', color: '#f97316', tool: 'Midjourney', tags: ['童话'] },
    { id: 'pa8', title: '大海与鲸', date: '2025-08-20', color: '#1e40af', tool: 'Midjourney', tags: ['海'] },
  ],
  '涂鸦': [
    { id: 'pb1', title: '2025 计划板', date: '2025-01-01', color: '#a855f7', tool: 'Procreate', tags: ['手绘'] },
  ],
}

export interface Demo {
  name: string
  desc: string
  href: string
  tags: string[]
  date?: string
}

export const demos: Demo[] = [
  { name: '生成式网格', desc: '程序化生成的网格图案。', href: '#', tags: ['艺术', 'canvas'], date: '2025-11-10' },
  { name: '声音可视化', desc: '实时音频波形。', href: '#', tags: ['音频', 'webgl'], date: '2025-10-22' },
  { name: '粒子场', desc: '可交互的粒子模拟。', href: '#', tags: ['物理'], date: '2025-10-05' },
  { name: '混色器', desc: '丝滑的颜色插值工具。', href: '#', tags: ['颜色'], date: '2025-09-18' },
  { name: '字体小游戏', desc: '一个小小的字体排版游乐场。', href: '#', tags: ['字体'], date: '2025-09-02' },
  { name: '磁性光标', desc: '磁性吸附光标实验。', href: '#', tags: ['交互'], date: '2025-08-15' },
  { name: 'OPC 倒计时', desc: '独立开发的一年倒计时。', href: '#', tags: ['倒计时'], date: '2025-07-20' },
  { name: '随机笑话', desc: '每次刷新给一句冷笑话。', href: '#', tags: ['文字'], date: '2025-06-30' },
]

// 兼容旧 API
export const photos: Photo[] = Object.values(photoGroups).flat()

// 书签按分类
export interface Bookmark {
  name: string
  desc?: string
  href: string
  category: string
}

export const bookmarkGroups: Record<string, Bookmark[]> = {
  '设计灵感': [
    { name: 'Godly', desc: 'Web 设计灵感画廊。', href: 'https://godly.website', category: '设计灵感' },
    { name: 'Awwwards', desc: '最前沿的网页设计奖。', href: 'https://awwwards.com', category: '设计灵感' },
    { name: 'Typewolf', desc: '字体推荐与搭配。', href: 'https://www.typewolf.com', category: '设计灵感' },
  ],
  '配色': [
    { name: 'NIPPON COLORS', desc: '日本传统色。', href: 'https://nipponcolors.com', category: '配色' },
    { name: 'Adobe Color', desc: 'Adobe 官方色轮。', href: 'https://color.adobe.com', category: '配色' },
    { name: 'terminal.sexy', desc: '终端配色生成器。', href: 'https://terminal.sexy', category: '配色' },
  ],
  '前端资源': [
    { name: 'Vue 官方文档', desc: 'Vue 3 组合式 API。', href: 'https://cn.vuejs.org', category: '前端资源' },
    { name: 'Vite 中文站', desc: '下一代构建工具。', href: 'https://cn.vitejs.dev', category: '前端资源' },
    { name: 'Unocss 官网', desc: '原子化 CSS。', href: 'https://unocss.dev', category: '前端资源' },
    { name: 'Can I Use', desc: '浏览器兼容查询。', href: 'https://caniuse.com', category: '前端资源' },
    { name: 'Bundlephobia', desc: '查 npm 包体积。', href: 'https://bundlephobia.com', category: '前端资源' },
  ],
  'AI 工具': [
    { name: 'Get 笔记', desc: 'AI 时代的笔记。', href: 'https://www.biji.com', category: 'AI 工具' },
    { name: 'Anthropic', desc: 'Claude 模型方。', href: 'https://www.anthropic.com', category: 'AI 工具' },
    { name: 'Cursor', desc: 'AI 优先的编辑器。', href: 'https://www.cursor.com', category: 'AI 工具' },
  ],
  '字体': [
    { name: 'LXGW 霞鹜文楷', desc: '本站使用的中文楷体。', href: 'https://github.com/lxgw/LxgwWenkaiTC', category: '字体' },
    { name: 'Google Fonts', desc: '海量开源字体。', href: 'https://fonts.google.com', category: '字体' },
    { name: '霞鹜文楷屏显', desc: 'LXGW 屏显优化版。', href: 'https://github.com/lxgw/LxgwWenkaiScreen', category: '字体' },
  ],
  '杂项': [
    { name: 'Hemingway', desc: '英语写作润色。', href: 'http://www.hemingwayapp.com', category: '杂项' },
    { name: 'Time Buddy', desc: '跨时区时间换算。', href: 'https://www.worldtimebuddy.com', category: '杂项' },
  ],
}

// 网站清单（按 antfu 风格的"websites"页）
export interface Website {
  name: string
  desc: string
  href: string
  status?: '在用' | '归档' | '规划中'
  category: string
}

export const websiteGroups: Record<string, Website[]> = {
  '个人项目': [
    { name: 'Eagle（本主页）', desc: 'Vue 3 + UnoCSS 仿 antfu.me 风格搭建。', href: 'https://jeekeagle.github.io/eagle/', status: '在用', category: '个人项目' },
    { name: 'SkillsHub', desc: 'AI 工具与工作流入口。', href: '#', status: '规划中', category: '个人项目' },
  ],
  '家庭': [
    { name: '童话小镇', desc: '记录女儿成长的笔记站。', href: '#', status: '规划中', category: '家庭' },
  ],
  '创作': [
    { name: 'AI 画画画廊', desc: '把每天的 AI 画收集起来。', href: '#', status: '规划中', category: '创作' },
    { name: '摄影集', desc: '用相机记录的瞬间。', href: '/#/photos', status: '在用', category: '创作' },
  ],
}
