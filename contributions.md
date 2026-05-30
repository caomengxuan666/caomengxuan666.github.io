---
layout: default
title: Issues & PRs
description: 一些更能说明问题来源的 issue 和 pull request。
permalink: /contributions/
---

<main class="listing-page">
  <header class="page-heading">
    <p class="section-label">Issues & PRs</p>
    <h1>Issues & PRs</h1>
    <p class="lead">按问题和 PR 整理，比单纯列仓库更能看出实际参与过的工程细节。</p>
  </header>

  <div class="contribution-list">
    {% for item in site.data.contributions %}
    <article>
      <p class="post-meta">{{ item.date }} · {{ item.kind }} · {{ item.status }}</p>
      <h2>{{ item.title }}</h2>
      <p>{{ item.summary }}</p>
      <div class="card-links">
        {% for link in item.links %}
        <a href="{{ link.url }}">{{ link.label }}</a>
        {% endfor %}
      </div>
    </article>
    {% endfor %}
  </div>
</main>
