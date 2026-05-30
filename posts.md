---
layout: default
title: 文章
description: 按时间整理的技术笔记。
permalink: /posts/
---

<main class="listing-page">
  <header class="page-heading">
    <p class="section-label">Writing</p>
    <h1>文章</h1>
    <p class="lead">先写正在做的东西，少写泛泛的感想。</p>
  </header>

  <div class="archive-list">
    {% for post in site.posts %}
    <article>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.description }}</p>
    </article>
    {% endfor %}
  </div>
</main>
