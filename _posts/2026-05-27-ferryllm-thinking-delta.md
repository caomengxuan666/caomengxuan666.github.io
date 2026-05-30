---
title: "ferryllm：thinking_delta 不能被当成 text_delta"
description: "00cb7e5 修了 Anthropic thinking_delta 被错误映射的问题。协议网关里，中间表示少一个 variant 就可能让客户端断流。"
date: 2026-05-27
updated: 2026-05-30
tags: [ferryllm, llm, protocol]
---

[`00cb7e5`](https://github.com/caomengxuan666/ferryllm/commit/00cb7e54ca0b8243190a05cd0c2534493c1f0e5b) 修的是一个很典型的协议网关问题：Anthropic 后端会发 `thinking_delta` SSE event，但 ferryllm 的 IR 里没有对应的 `ThinkingDelta` variant。

结果是 adapter 把它悄悄转成了 `TextDelta`。这看起来像“内容还在”，但协议语义已经变了。客户端期望的是 thinking block 的增量，收到 text delta 以后可能直接认为 stream 违规，然后断开。

这次修复做了几件事：

- 在 IR 的 `ContentDelta` 里加入 `ThinkingDelta`。
- Anthropic adapter 把后端的 thinking delta 映射到 IR thinking delta。
- Anthropic entry 发出正确的 `thinking_delta` SSE event。
- streaming index remap 逻辑也要认识 thinking block。

ferryllm README 里写的是 `Client protocol -> ferryllm IR -> provider protocol`。这条路径的前提是 IR 不能丢语义。如果 IR 为了省事把不同 event 合并成普通 text，后面每个 provider/client adapter 都要靠猜来补，最后还是回到 N x M 的坑里。

所以这类 bug 的教训很直接：协议网关的中间表示宁愿多几个细粒度 variant，也不要把上游语义压扁。
