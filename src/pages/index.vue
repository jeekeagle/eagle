<script setup lang="ts">
const year = new Date().getFullYear()

// 占位链接（用户后续可替换）
const links = {
  here: '#',            // 这里（项目页）
  photography: '/#/photos', // 摄影
  photosPage: '/#/photos',  // 这个页面（照片页）
  gear: '/#/use',       // 常用工具
  stack: '/#/use',      // 技术栈
  skillsHub: '#',       // SkillsHub（未建）
  fairytale: '#',       // 童话小镇（未建）
}
</script>

<template>
  <div class="prose m-auto mb-8">
    <h1 class="mb-0 slide-enter-50">Yiguo</h1>
  </div>

  <article>
    <div class="prose m-auto slide-enter-content">
      <p>
        你好！我是 Yiguo，你的朋友，一个智能时代的工程师。
      </p>

      <p>
        在山东青岛工作。
      </p>

      <p>
        我热衷于打造让自己和他人更高效、享受过程的工具。
      </p>

      <p>
        自我定位是一名 <abbr title="One-Person Company">OPC</abbr>，
        借助 Agent 的力量，一个人就能完成过去需要团队才能做的事情。
        你可以在
        <a :href="links.here" class="font-semibold"><strong>这里</strong></a>
        看到我的全部项目。
      </p>

      <p>
        我会经常写
        <a href="/#/posts">博客文章</a>，
        聊聊 AI、Agent 架构、个人知识管理和个人成长的那些事。
        我还喜欢看书和写书，把思考过程变成可以回溯的资产。
      </p>

      <p>
        编程之外，我也喜欢
        <a :href="links.photography" class="font-semibold"><strong>摄影</strong></a>
        、旅行和 AI 画画。照片会发到
        <a :href="links.photosPage" class="font-semibold"><strong>这个页面</strong></a>。
      </p>

      <p>
        如果你感兴趣，可以看看我的
        <a :href="links.gear" class="font-semibold"><strong>常用工具</strong></a>
        /
        <a :href="links.stack" class="font-semibold"><strong>技术栈</strong></a>
        /
        <a :href="links.skillsHub" class="font-semibold"><strong>SkillsHub</strong></a>
        。
      </p>

      <p>
        家里有一个女儿，我很珍惜与女儿一起的时光。
        也用笔记记录女儿的成长，
        <a :href="links.fairytale" class="font-semibold"><strong>这个女儿的"童话小镇"</strong></a>。
      </p>

      <p>
        如果你喜欢我做的东西，欢迎常来看看。
      </p>

      <div class="flex-auto"></div>

      <hr />

      <p>在以下平台找我</p>
      <p class="mt--2! flex flex-wrap gap-2">
        <a href="https://github.com/jeekeagle" target="_blank" rel="noopener">
          <span class="op75 i-simple-icons-github"></span>
          GitHub
        </a>
        <a href="https://zhihu.com" target="_blank" rel="noopener">
          <span class="op75 i-simple-icons-zhihu"></span>
          知乎
        </a>
        <a href="https://weibo.com" target="_blank" rel="noopener">
          <span class="op75 i-simple-icons-sinaweibo"></span>
          微博
        </a>
        <a href="https://x.com" target="_blank" rel="noopener">
          <span class="op75 i-ri-twitter-x-fill"></span>
          X
        </a>
        <a href="https://space.bilibili.com" target="_blank" rel="noopener">
          <span class="op75 i-simple-icons-bilibili"></span>
          B站
        </a>
      </p>

      <p>
        或者发邮件到
        <span class="font-mono">hi<span class="i-carbon-at"></span>yiguo.dev</span>
      </p>
    </div>
  </article>

  <div class="mt-10 mb-6 prose m-auto flex slide-enter animate-delay-1200 copyright">
    <span class="text-sm op50">
      <a
        target="_blank"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        style="color: inherit"
      >CC BY-NC-SA 4.0</a>
      2021-{{ year }} © Yiguo
    </span>
    <div class="flex-auto"></div>
  </div>
</template>
