---
layout: default
title: 曹梦轩
description: cxxmcp、WinuxCmd、AstraDB、libgossip、ferryllm 和一些 C++/Rust 基础设施实验。
---

<main id="top">
  <section class="hero compact-hero">
    <div class="hero-copy">
      <p class="eyebrow">caomengxuan666 · Chaohu University</p>
      <h1>曹梦轩</h1>
      <p class="lead">
        这里主要放正在写的项目和一些工程笔记。最近的主线是
        <a href="https://github.com/caomengxuan666/cxxmcp">cxxmcp</a>：
        一个 C++17 的 Model Context Protocol SDK。
      </p>
      <div class="hero-actions" aria-label="快捷链接">
        <a class="button primary" href="https://caomengxuan666.github.io/cxxmcp/">cxxmcp 文档</a>
        <a class="button secondary" href="https://github.com/caomengxuan666/cxxmcp">cxxmcp 仓库</a>
      </div>
    </div>
    <figure class="portrait">
      <img
        src="{{ '/assets/avatar.png' | relative_url }}"
        alt="曹梦轩的 GitHub 头像"
        width="260"
        height="260"
      />
      <figcaption>
        <strong>If I cannot be a poet, I will be the poem.</strong>
        <span>Linux C++ learner. 代码和文档比简介更可靠。</span>
      </figcaption>
    </figure>
  </section>

  <section class="section-strip">
    <div>
      <p class="section-label">Current Thread</p>
      <h2>cxxmcp</h2>
    </div>
    <div class="focus-block">
      <p>
        cxxmcp 目前有独立的 GitHub Pages 文档，README 里已经把 quick start、transport、package consumption、
        release gates 和 conformance evidence 放出来。这个入口会比首页几句介绍更有用。
      </p>
      <div class="doc-links">
        <a href="https://caomengxuan666.github.io/cxxmcp/">文档首页</a>
        <a href="https://caomengxuan666.github.io/cxxmcp/getting-started.html">Getting started</a>
        <a href="https://caomengxuan666.github.io/cxxmcp/concepts.html">Concepts</a>
        <a href="https://github.com/caomengxuan666/cxxmcp/blob/main/docs/conformance_evidence.md">Conformance evidence</a>
      </div>
    </div>
  </section>

  <section class="content-band">
    <div class="section-heading">
      <div>
        <p class="section-label">Pinned Repositories</p>
        <h2>项目</h2>
      </div>
      <a class="plain-link" href="{{ '/projects/' | relative_url }}">全部项目说明</a>
    </div>
    <div class="project-grid">
      {% for project in site.data.projects limit: 6 %}
      <article class="project-card">
        <div>
          <p class="project-lang">{{ project.language }} · {{ project.status }}</p>
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </div>
        <div class="card-links">
          <a href="{{ project.repo }}">GitHub</a>
          {% if project.docs %}<a href="{{ project.docs }}">Docs</a>{% endif %}
        </div>
      </article>
      {% endfor %}
    </div>
  </section>

  <section class="content-band">
    <div class="section-heading">
      <div>
        <p class="section-label">Writing</p>
        <h2>文章</h2>
      </div>
      <a class="plain-link" href="{{ '/posts/' | relative_url }}">文章归档</a>
    </div>
    <div class="post-list">
      {% for post in site.posts limit: 4 %}
      <article class="post-card">
        <a href="{{ post.url | relative_url }}">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y-%m-%d" }}</time>
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <span>阅读</span>
        </a>
      </article>
      {% endfor %}
    </div>
  </section>
</main>
