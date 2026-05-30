---
title: "把 cxxmcp 当成当前主线"
description: "这篇不是项目宣传稿，只记录 cxxmcp 现在解决什么问题，以及我为什么把文档和一致性测试放在首页入口。"
date: 2026-05-30
updated: 2026-05-30
tags: [cxxmcp, mcp, cpp]
---

cxxmcp 现在是我最应该放在博客首页的项目。它不是一个“我会 C++”的证明，而是一个具体问题：在 C++ 程序里嵌入 MCP server/client，应该有稳定的协议模型、transport 抽象、service 生命周期和可验证的一致性结果。

README 里已经把主线写得比较清楚：C++17、CMake、server/client SDK、stdio、process stdio、Streamable HTTP、package consumption，以及和官方 conformance runner 的结果。博客首页没必要重复这些表格，应该直接把读者带到文档。

几个入口：

- [cxxmcp 文档首页](https://caomengxuan666.github.io/cxxmcp/)
- [Getting started](https://caomengxuan666.github.io/cxxmcp/getting-started.html)
- [Concepts](https://caomengxuan666.github.io/cxxmcp/concepts.html)
- [Conformance evidence](https://github.com/caomengxuan666/cxxmcp/blob/main/docs/conformance_evidence.md)

后面如果写文章，我更想写这些细节：`Peer<Role>` 和 `Service<Role>` 的边界、transport 怎么保持 role-generic、conformance runner 暴露了哪些 SDK 设计问题、package manager 支持为什么容易拖慢 API 稳定。
