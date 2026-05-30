---
layout: default
title: 曹梦轩的博客
description: cxxmcp、Windows/Linux 工具、Redis 兼容数据库和 C++/Rust 基础设施笔记。
---

<main class="blog-shell">
  <header class="blog-title">
    <p class="eyebrow">caomengxuan666</p>
    <h1>曹梦轩的博客</h1>
    <p>
      写正在做的项目、遇到的问题和验证过程。现在主要围绕
      <a href="https://github.com/caomengxuan666/cxxmcp">cxxmcp</a>、
      Windows/Linux 工具、Redis 生态和一些 C++/Rust 基础设施实验。
    </p>
    <nav class="quick-links" aria-label="博客快捷入口">
      <a href="{{ '/posts/' | relative_url }}">全部文章</a>
      <a href="{{ '/topics/' | relative_url }}">主题</a>
      <a href="{{ '/feed.xml' | relative_url }}">RSS</a>
      <a href="https://github.com/caomengxuan666">GitHub</a>
    </nav>
  </header>

  <div class="blog-layout">
    <section class="feed-column" aria-labelledby="latest-posts">
      <div class="section-heading tight">
        <div>
          <p class="section-label">Latest</p>
          <h2 id="latest-posts">最新文章</h2>
        </div>
      </div>

      {% for post in site.posts limit: 8 %}
      <article class="feed-item">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
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

      <a class="archive-link" href="{{ '/posts/' | relative_url }}">查看完整归档</a>
    </section>

    <aside class="blog-sidebar" aria-label="博客侧栏">
      <section class="side-box">
        <h2>关于</h2>
        <img
          class="side-avatar"
          src="{{ '/assets/avatar.png' | relative_url }}"
          alt="曹梦轩的 GitHub 头像"
          width="72"
          height="72"
        />
        <p>If I cannot be a poet, I will be the poem.</p>
        <p>这里不放简历。要了解我最近在写什么，看文章和仓库更直接。</p>
      </section>

      <section class="side-box">
        <h2>当前主线</h2>
        <p>
          <a href="https://caomengxuan666.github.io/cxxmcp/">cxxmcp 文档</a>
          是这个站点最重要的外部入口：C++17 MCP SDK、server/client、transport、conformance 和 package consumption 都在那里。
        </p>
        <div class="side-links">
          <a href="https://caomengxuan666.github.io/cxxmcp/getting-started.html">Getting started</a>
          <a href="https://caomengxuan666.github.io/cxxmcp/transports.html">Transports</a>
          <a href="https://github.com/caomengxuan666/cxxmcp">Repository</a>
        </div>
      </section>

      <section class="side-box">
        <h2>主题</h2>
        <ul class="topic-list">
          {% for topic in site.data.topics %}
          <li>
            <a href="{{ topic.url | relative_url }}">{{ topic.name }}</a>
            <span>{{ topic.description }}</span>
          </li>
          {% endfor %}
        </ul>
      </section>

      <section class="side-box">
        <h2>仓库线索</h2>
        <ul class="repo-mini-list">
          {% for project in site.data.projects limit: 4 %}
          <li>
            <a href="{{ project.repo }}">{{ project.name }}</a>
            <span>{{ project.language }}</span>
          </li>
          {% endfor %}
        </ul>
        <a class="plain-link" href="{{ '/projects/' | relative_url }}">项目索引</a>
      </section>
    </aside>
  </div>
</main>
