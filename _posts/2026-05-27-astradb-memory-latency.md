---
title: "AstraDB：OBJECT、MEMORY STATS、LATENCY 这些命令不好糊弄"
description: "9fb44c9 给 AstraDB 补了 OBJECT ENCODING、MEMORY STATS 和 LATENCY 子命令，后面又修了 EvictionPolicy 名称映射。"
date: 2026-05-27
updated: 2026-05-30
tags: [AstraDB, redis, compatibility]
---

Redis 兼容不是只把常用读写命令跑通。客户端、监控系统和压测工具会问很多“状态类”命令，返回值不准也会造成兼容问题。

这次 AstraDB 的相关提交：

- [`9fb44c9`](https://github.com/caomengxuan666/AstraDB/commit/9fb44c9e1172b76ada53be7dbe9b93ccbf0d6908)：增强 `OBJECT`、`MEMORY STATS` 和 `LATENCY`。
- [`9355ae6`](https://github.com/caomengxuan666/AstraDB/commit/9355ae6dff5361c4d6b4ff7edd05666b1ea381b2)：`MEMORY STATS` 使用正确的 `EvictionPolicy` 名称转换。

`OBJECT ENCODING` 这类命令看起来只是返回字符串，但它要知道底层数据结构：string 是 int 还是 raw，hash 是 hashtable，sorted set 是 b+tree，stream 是 stream。这里如果随便返回一个固定值，很多调试工具会被误导。

`MEMORY STATS` 更麻烦，它不能只给一个估算数字。至少要接上实际 memory tracker，还要把 `maxmemory`、`maxmemory-policy` 这类配置暴露出来。后续那个 enum 名称修复也说明了一个问题：兼容命令里的字符串就是 API，不是内部实现细节。

`LATENCY` 的子命令也类似。`LATEST`、`HISTORY`、`RESET`、`EVENTS`、`GRAPH`、`DOCTOR` 都会被运维脚本当作可观测性接口。实现这些命令，比补一个普通数据结构命令更能暴露系统内部是否有足够的事件记录。
