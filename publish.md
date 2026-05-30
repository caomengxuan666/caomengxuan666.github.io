---
layout: default
title: 发布文章
description: 生成博客文章草稿，或通过 GitHub Issue 提交文章素材。
permalink: /publish/
---

<main class="publish-shell">
  <section class="publish-hero">
    <div>
      <p class="eyebrow">Publish</p>
      <h1>写一篇博客</h1>
      <p>
        GitHub Pages 是静态站点，所以发布动作最终还是提交 Markdown。
        这个页面只负责把标题、标签、摘要和正文整理成 `_posts/` 需要的格式。
      </p>
    </div>
    <div class="publish-status">
      <span>Output path</span>
      <code id="post-path-preview">_posts/YYYY-MM-DD-slug.md</code>
    </div>
  </section>

  <div class="publish-grid">
    <aside class="publish-guide" aria-label="发布流程">
      <section>
        <h2>怎么发布</h2>
        <ol>
          <li>写标题、slug、标签和正文。</li>
          <li>点“生成 Markdown”。</li>
          <li>复制输出，提交到仓库的 `_posts/`。</li>
          <li>或者用 Issue 表单，让 workflow 自动开 PR。</li>
        </ol>
      </section>
      <section>
        <h2>自动化入口</h2>
        <a href="https://github.com/caomengxuan666/caomengxuan666.github.io/issues/new?template=blog-post.yml">Issue 表单生成 PR</a>
        <a href="{{ '/docs/ai-publishing/' | relative_url }}">AI/MCP 发布契约</a>
        <a href="{{ '/schemas/blog-post.schema.json' | relative_url }}">JSON Schema</a>
      </section>
    </aside>

    <section class="composer-window" aria-labelledby="composer-title">
      <div class="window-bar">
        <div>
          <h2 id="composer-title">Post composer</h2>
          <p>Front matter + Markdown generator</p>
        </div>
        <span>Jekyll</span>
      </div>

      <form class="post-composer" id="post-composer">
        <div class="field-grid">
          <label>
            标题
            <input name="title" required placeholder="cxxmcp v1.1.2：release gates 先要能留下证据" />
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
        </div>

        <label>
          摘要
          <textarea name="description" rows="3" placeholder="一句话说明这篇文章来自哪个提交、issue 或 release。"></textarea>
        </label>
        <label>
          正文
          <textarea name="body" rows="13" placeholder="背景&#10;&#10;改动&#10;&#10;验证&#10;&#10;遗留问题"></textarea>
        </label>

        <div class="composer-actions">
          <button type="submit">生成 Markdown</button>
          <button type="button" id="copy-post">复制输出</button>
          <a id="github-new-file" href="https://github.com/caomengxuan666/caomengxuan666.github.io/new/main" target="_blank" rel="noreferrer">GitHub 新建文件</a>
        </div>
      </form>

      <label class="output-console">
        <span>Generated Markdown</span>
        <textarea id="post-output" rows="17" readonly spellcheck="false"></textarea>
      </label>
    </section>
  </div>
</main>
