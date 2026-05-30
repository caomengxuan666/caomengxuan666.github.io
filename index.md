---
layout: default
title: 曹梦轩的博客
description: cxxmcp、Windows/Linux 工具、Redis 兼容数据库和 C++/Rust 基础设施笔记。
---

<main class="blog-shell">
  <header class="blog-hero">
    <p class="eyebrow">caomengxuan666</p>
    <h1>曹梦轩的博客</h1>
    <p class="lede">
      开发日志、issue 复盘和发布记录。最近主要写 cxxmcp、WinuxCmd、MCP conformance 和 C++/Rust 工程问题。
    </p>
    <div class="hero-actions">
      <a class="button primary" href="{{ '/posts/' | relative_url }}">读文章</a>
      <a class="button" href="{{ '/contributions/' | relative_url }}">Issues/PRs</a>
      <a class="button" href="{{ '/publish/' | relative_url }}">发布文章</a>
    </div>
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
        <div>
          <p class="post-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
            {% if post.tags %} · {{ post.tags | join: " / " }}{% endif %}
          </p>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.description }}</p>
        </div>
      </article>
      {% endfor %}

      <a class="archive-link" href="{{ '/posts/' | relative_url }}">查看完整归档</a>
    </section>

    <aside class="blog-sidebar" aria-label="博客侧栏">
      <section class="side-box">
        <h2>关于</h2>
        <p>If I cannot be a poet, I will be the poem.</p>
        <p>Linux C++ learner。文章优先记录代码和发布过程。</p>
      </section>

      <section class="side-box">
        <h2>最近</h2>
        <p>
          <a href="https://caomengxuan666.github.io/cxxmcp/">cxxmcp docs</a>：
          C++17 MCP SDK 的文档入口。
        </p>
      </section>

      <section class="side-box">
        <h2>链接</h2>
        <ul class="repo-mini-list">
          <li>
            <a href="https://github.com/caomengxuan666">GitHub</a>
            <span>公开仓库</span>
          </li>
          <li>
            <a href="{{ '/projects/' | relative_url }}">Projects</a>
            <span>项目索引</span>
          </li>
          <li>
            <a href="{{ '/contributions/' | relative_url }}">Issues/PRs</a>
            <span>问题和 PR</span>
          </li>
          <li>
            <a href="{{ '/tags/' | relative_url }}">Tags</a>
            <span>文章标签</span>
          </li>
          <li>
            <a href="{{ '/feed.xml' | relative_url }}">RSS</a>
            <span>订阅</span>
          </li>
          <li>
            <a href="{{ '/publish/' | relative_url }}">Publish</a>
            <span>写文章窗口</span>
          </li>
        </ul>
      </section>
    </aside>
  </div>
</main>
