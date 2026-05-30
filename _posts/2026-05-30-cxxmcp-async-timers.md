---
title: "cxxmcp：async result 和 executor timer 这种小修最容易变成大 bug"
description: "689581b 修的是 async result 和 executor timers。它不像新功能显眼，但这类边界通常最影响 SDK 的稳定感。"
date: 2026-05-30
updated: 2026-05-30
tags: [cxxmcp, async, timers]
---

[`689581b`](https://github.com/caomengxuan666/cxxmcp/commit/689581b098da31d57167cb104a796ee0c54e0f10) 的提交信息很短：`fix: harden async result and executor timers`。这种提交通常不适合写成“发布亮点”，但适合写进开发日志。

SDK 里的 async result 和 timer 不是孤立工具。它们通常挂在请求生命周期、超时、取消、回调调度和 executor 退出路径上。一个 timer 如果在错误线程触发，或者 result 在完成/取消之间没有清晰状态，最后表现出来可能是随机 hang、重复回调、析构时崩溃，或者测试里偶现的 timeout。

cxxmcp 现在的方向是把 `Peer`、`Service`、transport 和 handler 边界拆清楚。越是这种结构，越不能让底层 timer 偷偷拥有模糊生命周期。因为上层 API 看起来越干净，底层异步边界出错时就越难解释。

这类修复我会优先关注三件事：

1. result 是否只有一个完成路径。
2. timer 取消和 executor shutdown 的顺序是否固定。
3. 测试失败时有没有证据说明是超时、取消还是 handler 本身失败。

这篇先记到这里。后面如果这个区域继续改，应该把具体状态机画出来，而不是只在提交信息里写 harden。
