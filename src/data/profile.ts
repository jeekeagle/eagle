/**
 * 个人简介数据 —— 复刻 antfu.me 首页的"X of Y"结构
 * 把占位文字替换为你的真实信息即可
 */

export const profile = {
  name: 'Your Name',
  handle: 'yourname',
  email: 'hi@yourname.dev',
  domain: 'yourname.dev',
  bio: "Hey! I'm Your Name, a fanatical open sourceror and design engineer.",
  location: 'Somewhere on Earth',

  // Working at
  work: [
    { name: 'Your Company', href: 'https://example.com', avatar: '' },
    { name: 'Your Project', href: 'https://example.com', avatar: '' },
  ],

  // Creator of
  creator: [
    { name: 'Project One', href: 'https://example.com', avatar: '' },
    { name: 'Project Two', href: 'https://example.com', avatar: '' },
    { name: 'Project Three', href: 'https://example.com', avatar: '' },
    { name: 'Project Four', href: 'https://example.com', avatar: '' },
  ],

  // Core team of
  coreTeam: [
    { name: 'Framework A', href: 'https://example.com', avatar: '' },
    { name: 'Framework B', href: 'https://example.com', avatar: '' },
  ],

  // Maintaining
  maintaining: [
    { name: 'Tool X', href: 'https://example.com', avatar: '' },
    { name: 'Tool Y', href: 'https://example.com', avatar: '' },
  ],

  // 社交
  socials: [
    { name: 'GitHub', href: 'https://github.com', icon: 'i-simple-icons-github' },
    { name: 'Bluesky', href: 'https://bsky.app', icon: 'i-ri-bluesky-fill' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'i-ri-twitter-x-fill' },
    { name: 'Discord', href: 'https://discord.com', icon: 'i-simple-icons-discord' },
  ],

  // 赞助
  sponsors: [
    { name: 'Sponsor the Ecosystem', href: 'https://opencollective.com', icon: 'i-ph-hand-heart-duotone', class: 'btn-rose' },
    { name: 'Sponsor me', href: 'https://github.com/sponsors', icon: 'i-ph-heart-duotone', class: 'btn-rose' },
    { name: '在爱发电上支持我', href: 'https://afdian.com', icon: 'i-ph-lightning-duotone', class: 'btn-yellow' },
  ],
}
