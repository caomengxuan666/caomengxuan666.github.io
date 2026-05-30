---
layout: default
title: 曹梦轩的博客
description: cxxmcp、Windows/Linux 工具、Redis 兼容数据库和 C++/Rust 基础设施笔记。
---

<main class="blog-shell">
  <section class="blog-cover" aria-labelledby="site-title">
    <div class="cover-copy">
      <p class="eyebrow">caomengxuan666</p>
      <h1 id="site-title">曹梦轩的博客</h1>
      <p>
        写正在做的项目、遇到的问题和验证过程。当前主线是
        <a href="https://github.com/caomengxuan666/cxxmcp">cxxmcp</a>，
        旁边还有 Windows/Linux 工具、Redis 生态和 C++/Rust 基础设施实验。
      </p>
      <nav class="quick-links" aria-label="博客快捷入口">
        <a href="{{ '/posts/' | relative_url }}">Posts</a>
        <a href="{{ '/tags/' | relative_url }}">Tags</a>
        <a href="{{ '/topics/' | relative_url }}">Topics</a>
        <a href="{{ '/feed.xml' | relative_url }}">RSS</a>
      </nav>
    </div>
    <aside class="profile-card" aria-label="作者信息">
      <img
        src="{{ '/assets/avatar.png' | relative_url }}"
        alt="曹梦轩的 GitHub 头像"
        width="96"
        height="96"
      />
      <div>
        <h2>曹梦轩</h2>
        <p>If I cannot be a poet, I will be the poem.</p>
      </div>
      <div class="profile-links">
        <a href="https://github.com/caomengxuan666">GitHub</a>
        <a href="{{ '/about/' | relative_url }}">About</a>
      </div>
    </aside>
  </section>

  <section class="site-stats" aria-label="站点概览">
    <div>
      <span>{{ site.posts | size }}</span>
      <p>posts</p>
    </div>
    <div>
      <span>{{ site.tags | size }}</span>
      <p>tags</p>
    </div>
    <div>
      <span>{{ site.data.projects | size }}</span>
      <p>tracked repos</p>
    </div>
    <div>
      <span>cxxmcp</span>
      <p>current thread</p>
    </div>
  </section>

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
        <div class="date-block">
          <time datetime="{{ post.date | date_to_xmlschema }}">
            <span>{{ post.date | date: "%m.%d" }}</span>
            <small>{{ post.date | date: "%Y" }}</small>
          </time>
        </div>
        <div>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.description }}</p>
          {% if post.tags %}
          <div class="tag-row" aria-label="标签">
            {% for tag in post.tags %}
            <span>{{ tag }}</span>
            {% endfor %}
          </div>
          {% endif %}
        </div>
      </article>
      {% endfor %}

      <a class="archive-link" href="{{ '/posts/' | relative_url }}">查看完整归档</a>
    </section>

    <aside class="blog-sidebar" aria-label="博客侧栏">
      <section class="side-box">
        <h2>关于</h2>
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
        <h2>标签</h2>
        <div class="mini-tag-cloud">
          {% assign tags = site.tags | sort %}
          {% for tag in tags %}
          <a href="{{ '/tags/' | relative_url }}#{{ tag[0] | slugify }}">{{ tag[0] }}</a>
          {% endfor %}
        </div>
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
