---
layout: default
title: cxxmcp
description: cxxmcp 相关笔记和文档入口。
permalink: /topics/cxxmcp/
---

<main class="listing-page">
  <header class="page-heading">
    <p class="section-label">Topic</p>
    <h1>cxxmcp</h1>
    <p class="lead">C++17 Model Context Protocol SDK。这里放开发笔记，完整 API 和使用文档看项目 Pages。</p>
  </header>

  <section class="focus-block standalone">
    <p>
      项目文档已经发布在 GitHub Pages：包含 getting started、concepts、transports、cookbook、
      migration、stability、security 和 troubleshooting。
    </p>
    <div class="doc-links">
      <a href="https://caomengxuan666.github.io/cxxmcp/">文档首页</a>
      <a href="https://caomengxuan666.github.io/cxxmcp/getting-started.html">Getting started</a>
      <a href="https://caomengxuan666.github.io/cxxmcp/transports.html">Transports</a>
      <a href="https://github.com/caomengxuan666/cxxmcp">GitHub</a>
    </div>
  </section>

  <div class="archive-list compact">
    {% for post in site.posts %}
      {% if post.tags contains "cxxmcp" %}
      <article>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p>{{ post.description }}</p>
      </article>
      {% endif %}
    {% endfor %}
  </div>
</main>
