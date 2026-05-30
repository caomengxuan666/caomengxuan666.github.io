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
    <p class="lead">按时间倒序。这里应该像日志，而不是作品集。</p>
  </header>

  <div class="archive-list">
    {% for post in site.posts %}
    <article>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.description }}</p>
      {% if post.tags %}
      <div class="tag-row" aria-label="标签">
        {% for tag in post.tags %}
        <span>{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </article>
    {% endfor %}
  </div>
</main>
