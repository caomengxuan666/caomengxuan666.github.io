---
layout: default
title: 标签
description: 按标签浏览文章。
permalink: /tags/
---

<main class="listing-page">
  <header class="page-heading">
    <p class="section-label">Tags</p>
    <h1>标签</h1>
    <p class="lead">标签用于快速回到同一类问题，不用把所有内容塞进导航。</p>
  </header>

  <div class="tag-cloud">
    {% assign tags = site.tags | sort %}
    {% for tag in tags %}
    <a href="#{{ tag[0] | slugify }}">{{ tag[0] }} <span>{{ tag[1].size }}</span></a>
    {% endfor %}
  </div>

  <div class="tag-sections">
    {% for tag in tags %}
    <section id="{{ tag[0] | slugify }}">
      <h2>{{ tag[0] }}</h2>
      {% for post in tag[1] %}
      <article>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </article>
      {% endfor %}
    </section>
    {% endfor %}
  </div>
</main>
