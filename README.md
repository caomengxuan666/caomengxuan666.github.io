# caomengxuan666.github.io

曹梦轩的个人技术博客，使用 Jekyll 和 GitHub Pages 发布。

## 本地预览

```powershell
bundle install
bundle exec jekyll serve
```

然后访问 `http://localhost:4000`。

## 结构

- `_posts/`: Markdown 文章，文件名使用 `YYYY-MM-DD-slug.md`
- `_data/projects.yml`: 首页和项目页的数据源
- `_layouts/`: Jekyll 页面模板
- `topics/`: 主题索引页

推送 `main` 分支后，GitHub Actions 会构建并发布到 GitHub Pages。
