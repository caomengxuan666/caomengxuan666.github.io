# caomengxuan666.github.io

曹梦轩的个人博客，面向 GitHub Pages 的纯静态站点。

## 本地预览

直接打开 `index.html`，或在仓库根目录启动一个静态服务器：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 发布到 GitHub Pages

1. 在 GitHub 创建仓库 `caomengxuan666.github.io`。
2. 把本地仓库推送到 GitHub。
3. 在仓库的 `Settings -> Pages` 中选择 GitHub Actions 作为发布来源。

仓库里已经包含 `.github/workflows/pages.yml`，推送 `main` 分支后会自动部署。
