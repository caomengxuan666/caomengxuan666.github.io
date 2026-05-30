---
layout: default
title: 发布文章
description: 生成博客文章草稿，或通过 GitHub Issue 提交文章素材。
permalink: /publish/
---

<main class="publish-page">
  <header class="page-heading">
    <p class="section-label">Publish</p>
    <h1>发布文章</h1>
    <p class="lead">这是静态站点，没有数据库后台。这里提供一个写作窗口，生成可提交到 `_posts/` 的 Markdown。</p>
  </header>

  <section class="composer-panel" aria-labelledby="composer-title">
    <div>
      <h2 id="composer-title">文章草稿</h2>
      <p>标题、slug、标签和正文会生成 Jekyll front matter。生成后复制到仓库，或打开 GitHub 新建文件页面提交。</p>
    </div>

    <form class="post-composer" id="post-composer">
      <label>
        标题
        <input name="title" required placeholder="cxxmcp release gates 先要能留下证据" />
      </label>
      <label>
        Slug
        <input name="slug" required placeholder="cxxmcp-release-gates" pattern="[a-z0-9-]+" />
      </label>
      <label>
        日期
        <input name="date" type="date" required />
      </label>
      <label>
        标签
        <input name="tags" placeholder="cxxmcp, ci, release" />
      </label>
      <label>
        摘要
        <textarea name="description" rows="3" placeholder="一句话说明这篇文章解决什么问题。"></textarea>
      </label>
      <label>
        正文
        <textarea name="body" rows="14" placeholder="从 release / commit / issue 开始写，不写建站说明。"></textarea>
      </label>
      <div class="composer-actions">
        <button type="submit">生成 Markdown</button>
        <button type="button" id="copy-post">复制</button>
        <a id="github-new-file" href="https://github.com/caomengxuan666/caomengxuan666.github.io/new/main" target="_blank" rel="noreferrer">GitHub 新建文件</a>
      </div>
    </form>

    <label class="output-label">
      输出
      <textarea id="post-output" rows="16" readonly></textarea>
    </label>
  </section>

  <section class="composer-panel compact">
    <h2>其他入口</h2>
    <ul>
      <li><a href="https://github.com/caomengxuan666/caomengxuan666.github.io/issues/new?template=blog-post.yml">用 GitHub Issue 提交文章素材，并自动生成 PR</a></li>
      <li><a href="https://github.com/caomengxuan666/caomengxuan666.github.io/tree/main/_posts">直接编辑 `_posts/`</a></li>
      <li><a href="{{ '/docs/ai-publishing/' | relative_url }}">AI/MCP 发布契约</a></li>
    </ul>
  </section>
</main>
