const root = document.documentElement;
const storedTheme = localStorage.getItem("theme");

if (storedTheme) {
  root.dataset.theme = storedTheme;
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.dataset.theme = "dark";
}

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear().toString();
}

const articleBody = document.querySelector("#article-body");
const toc = document.querySelector("#post-toc nav");
if (articleBody && toc) {
  const headings = [...articleBody.querySelectorAll("h2, h3")];
  if (headings.length === 0) {
    document.querySelector("#post-toc")?.remove();
  } else {
    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent
          .trim()
          .toLowerCase()
          .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
          .replace(/^-+|-+$/g, "");
      }
      const link = document.createElement("a");
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      link.className = heading.tagName.toLowerCase();
      toc.appendChild(link);
    });
  }
}

const composer = document.querySelector("#post-composer");
const output = document.querySelector("#post-output");
const copyPost = document.querySelector("#copy-post");
const githubNewFile = document.querySelector("#github-new-file");
const pathPreview = document.querySelector("#post-path-preview");

function yamlString(value) {
  return `"${value.replaceAll("\\", "\\\\").replaceAll('"', '\\"')}"`;
}

function buildPostMarkdown(form) {
  const data = new FormData(form);
  const title = String(data.get("title") || "").trim();
  const slug = String(data.get("slug") || "").trim();
  const date = String(data.get("date") || "").trim();
  const tags = String(data.get("tags") || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  const description = String(data.get("description") || "").trim();
  const body = String(data.get("body") || "").trim();

  return {
    filename: `_posts/${date}-${slug}.md`,
    markdown: `---\ntitle: ${yamlString(title)}\ndescription: ${yamlString(description)}\ndate: ${date}\nupdated: ${date}\ntags: [${tags.join(", ")}]\n---\n\n${body}\n`,
  };
}

const dateInput = composer?.querySelector('input[name="date"]');
if (dateInput && !dateInput.value) {
  dateInput.value = new Date().toISOString().slice(0, 10);
}

composer?.addEventListener("submit", (event) => {
  event.preventDefault();
  const post = buildPostMarkdown(composer);
  output.value = post.markdown;
  if (pathPreview) {
    pathPreview.textContent = post.filename;
  }
  if (githubNewFile) {
    const params = new URLSearchParams({
      filename: post.filename,
      value: post.markdown,
    });
    githubNewFile.href = `https://github.com/caomengxuan666/caomengxuan666.github.io/new/main?${params.toString()}`;
  }
});

composer?.addEventListener("input", () => {
  const data = new FormData(composer);
  const date = String(data.get("date") || "YYYY-MM-DD").trim() || "YYYY-MM-DD";
  const slug = String(data.get("slug") || "slug").trim() || "slug";
  if (pathPreview) {
    pathPreview.textContent = `_posts/${date}-${slug}.md`;
  }
});

copyPost?.addEventListener("click", async () => {
  if (!output?.value) return;
  await navigator.clipboard.writeText(output.value);
  copyPost.textContent = "已复制";
  setTimeout(() => {
    copyPost.textContent = "复制";
  }, 1200);
});
