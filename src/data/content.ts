/**
 * 照片、赞助者、播客、Demos 数据
 */

export interface Photo {
  id: string
  title: string
  date: string
  // 留空：本地站不放真实图，使用占位色块
  color?: string
  tags?: string[]
}

export const photos: Photo[] = [
  { id: 'p1', title: 'Sunset over mountains', date: '2025-11-12', color: '#f59e0b' },
  { id: 'p2', title: 'Old town alley', date: '2025-09-30', color: '#64748b' },
  { id: 'p3', title: 'Coffee close-up', date: '2025-08-18', color: '#92400e' },
  { id: 'p4', title: 'City lights', date: '2025-07-22', color: '#1e3a8a' },
  { id: 'p5', title: 'Forest path', date: '2025-06-10', color: '#15803d' },
  { id: 'p6', title: 'Snowy rooftops', date: '2025-02-04', color: '#cbd5e1' },
  { id: 'p7', title: 'Foggy lake', date: '2024-12-15', color: '#0e7490' },
  { id: 'p8', title: 'Spring blossoms', date: '2024-04-08', color: '#db2777' },
]

export interface Sponsor {
  name: string
  amount: string
  href?: string
  tier?: 'gold' | 'silver' | 'bronze' | 'past'
}

export const sponsors: Sponsor[] = [
  { name: 'Sponsor A', amount: '$50 / mo', tier: 'gold', href: '#' },
  { name: 'Sponsor B', amount: '$20 / mo', tier: 'silver', href: '#' },
  { name: 'Sponsor C', amount: '$10 / mo', tier: 'silver', href: '#' },
  { name: 'Sponsor D', amount: '$5 / mo', tier: 'bronze', href: '#' },
  { name: 'Sponsor E', amount: '$5 / mo', tier: 'bronze', href: '#' },
  { name: 'Sponsor F', amount: 'one-time $100', tier: 'past', href: '#' },
  { name: 'Sponsor G', amount: 'one-time $50', tier: 'past', href: '#' },
  { name: 'Sponsor H', amount: 'one-time $20', tier: 'past', href: '#' },
  { name: 'Sponsor I', amount: 'one-time $20', tier: 'past', href: '#' },
  { name: 'Sponsor J', amount: 'one-time $10', tier: 'past', href: '#' },
]

export interface Podcast {
  name: string
  desc: string
  href: string
  icon: string
}

export const podcasts: Podcast[] = [
  {
    name: 'My Podcast',
    desc: 'Conversations with interesting people in tech.',
    href: 'https://example.com',
    icon: 'i-ri-mic-line',
  },
  {
    name: 'Co-hosted Show',
    desc: 'A side podcast I co-host about design.',
    href: 'https://example.com',
    icon: 'i-ri-headphone-line',
  },
]

export interface Demo {
  name: string
  desc: string
  href: string
  tags: string[]
}

export const demos: Demo[] = [
  { name: 'Generative Grid', desc: 'Procedurally generated grid patterns.', href: '#', tags: ['art', 'canvas'] },
  { name: 'Sound Visualizer', desc: 'Real-time audio waveform.', href: '#', tags: ['audio', 'webgl'] },
  { name: 'Particle Field', desc: 'Interactive particle simulation.', href: '#', tags: ['physics'] },
  { name: 'Color Mixer', desc: 'Smooth color interpolation tool.', href: '#', tags: ['color'] },
  { name: 'Type Puzzler', desc: 'A small typography playground.', href: '#', tags: ['type'] },
  { name: 'Smooth Cursor', desc: 'Magnetic cursor experiment.', href: '#', tags: ['interaction'] },
]
