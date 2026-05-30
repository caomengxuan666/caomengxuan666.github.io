---
layout: default
title: AI/MCP 发布契约
description: 给自动化 agent 和 MCP 工具使用的博客投稿格式。
permalink: /docs/ai-publishing/
---

<main class="article-page">
  <article>
    <header>
      <p class="article-meta">Publishing</p>
      <h1>AI/MCP 发布契约</h1>
      <p class="lead">自动化工具不要改首页，不要写施工说明。只生成文章文件或开投稿 issue。</p>
    </header>

    <div class="article-body">
      <h2>推荐路径</h2>
      <p>Agent 直接创建一个 Markdown 文件：</p>
      <pre><code>_posts/YYYY-MM-DD-slug.md</code></pre>

      <p>文件必须包含 front matter：</p>
      <pre><code>---
title: "仓库/版本/commit：具体问题"
description: "一句话说明改动、问题或验证方式。"
date: 2026-05-30
updated: 2026-05-30
tags: [cxxmcp, ci, release]
---

正文从 release、commit、issue 或 PR 开始写。</code></pre>

      <h2>写作约束</h2>
      <ul>
        <li>不要写“这个博客为什么这么设计”“首页应该怎样”这类施工记录。</li>
        <li>至少链接一个真实 commit、release、issue 或 PR。</li>
        <li>结构优先：背景、改动、验证、遗留问题。</li>
        <li>如果信息来自 issue/PR，保留原始链接。</li>
      </ul>

      <h2>Schema</h2>
      <p>机器生成内容可以先按 JSON schema 输出，再转换成 Markdown：</p>
      <p><a href="{{ '/schemas/blog-post.schema.json' | relative_url }}">blog-post.schema.json</a></p>

      <h2>Issue 入口</h2>
      <p>不能直接写文件时，使用 GitHub Issue 表单：</p>
      <p><a href="https://github.com/caomengxuan666/caomengxuan666.github.io/issues/new?template=blog-post.yml">Blog post draft issue</a></p>

      <p>
        带 `blog-post` 标签的 issue 会触发
        <code>Blog post from issue</code> workflow，自动创建一条包含新文章文件的 PR。
        AI/MCP 工具也可以直接开这种 issue，把文章素材交给 workflow 处理。
      </p>

      <h2>MCP 工具</h2>
      <p>
        独立实现放在
        <a href="https://github.com/caomengxuan666/cmx-blog-mcp">cmx-blog-mcp</a>：
        用 cxxmcp 暴露生成 Markdown、校验文章、创建博客 PR 三个工具。它只接受
        <code>blog-post/*</code> 分支，不直接推 <code>main</code>。
      </p>
    </div>
  </article>
</main>
