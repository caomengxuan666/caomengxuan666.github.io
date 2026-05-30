---
layout: default
title: 项目
description: 按 pinned 和当前开发线索整理的项目入口。
permalink: /projects/
---

<main class="listing-page">
  <header class="page-heading">
    <p class="section-label">Repositories</p>
    <h1>项目</h1>
    <p class="lead">这里按 GitHub pinned 和最近主线整理，不把所有仓库都堆上来。</p>
  </header>

  <div class="project-detail-list">
    {% for project in site.data.projects %}
    <article class="project-detail">
      <div>
        <p class="project-lang">{{ project.language }} · {{ project.status }}</p>
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
        <ul>
          {% for note in project.notes %}
          <li>{{ note }}</li>
          {% endfor %}
        </ul>
      </div>
      <div class="card-links">
        <a href="{{ project.repo }}">GitHub</a>
        {% if project.docs %}<a href="{{ project.docs }}">Docs</a>{% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</main>
