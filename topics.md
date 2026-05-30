---
layout: default
title: 主题
description: 按项目方向整理文章入口。
permalink: /topics/
---

<main class="listing-page">
  <header class="page-heading">
    <p class="section-label">Topics</p>
    <h1>主题</h1>
    <p class="lead">主题是阅读入口，不是技能清单。文章多起来之后，这里会继续拆细。</p>
  </header>

  <div class="topic-grid">
    {% for topic in site.data.topics %}
    <a href="{{ topic.url | relative_url }}">
      <span>{{ topic.name }}</span>
      <p>{{ topic.description }}</p>
    </a>
    {% endfor %}
  </div>
</main>
