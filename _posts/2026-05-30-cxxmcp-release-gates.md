---
title: "cxxmcp v1.1.2：release gates 先要能留下证据"
description: "这次 cxxmcp 发布前，主要在修 release gates、归档检查和外部 consumer 模板，目标是让发布不是只看一次 CI 绿灯。"
date: 2026-05-30
updated: 2026-05-30
tags: [cxxmcp, ci, release]
---

今天 cxxmcp 的提交大多不在 API 表面，而在发布链路上。

相关提交：

- [`1fdbec0`](https://github.com/caomengxuan666/cxxmcp/commit/1fdbec02841d85dcb98b39593cac0e5f6f38ecf7)：把 release gate 的 JUnit evidence 写到会被上传的路径。
- [`9949937`](https://github.com/caomengxuan666/cxxmcp/commit/994993785b01001d245e86be4e9df076af1b3017)：把 external consumer templates 放进 SDK source release。
- [`3ceaf5c`](https://github.com/caomengxuan666/cxxmcp/commit/3ceaf5ce8e43e662ce316a001a0a9f6edb9d7df3)：校验 split release gate archives。
- [`000430d`](https://github.com/caomengxuan666/cxxmcp/commit/000430d2f9c1b113ee61f9e5cbb2d5073078a5d7)：加 release preparation script。
- [`v1.1.2`](https://github.com/caomengxuan666/cxxmcp/releases/tag/v1.1.2)：对应发布。

我现在更倾向于把 SDK 的发布看成一组可复查的证据，而不是一次打 tag。尤其是 cxxmcp 这种要给下游 CMake consumer 用的库，源码包里少一个模板、artifact 路径写错、归档层级多一层，都会变成用户侧的安装问题。

这类 CI 修复看起来琐碎，但它们决定了发布是否能被别人复现。README 里写支持 Conan、vcpkg、FetchContent 没什么用，真正要紧的是 release artifact 里有没有足够的消费样例，以及 gate 失败时能不能定位到哪个包、哪个 layout 出了问题。

后面应该继续把 release gate 的输出做得更像审计记录：版本、包内容、consumer smoke test、conformance evidence，各自有稳定路径。这样发布以后回头看，不需要靠记忆解释“当时为什么能发”。
