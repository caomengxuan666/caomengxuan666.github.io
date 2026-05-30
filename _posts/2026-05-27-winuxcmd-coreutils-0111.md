---
title: "WinuxCmd v0.11.1：补 GNU coreutils 命令比想象中更像兼容性工程"
description: "v0.11.1 增加了 stty、dir、vdir、dircolors、chgrp、strings、hexdump、col、more，也把很多已解析但没生效的选项接到实现里。"
date: 2026-05-27
updated: 2026-05-30
tags: [WinuxCmd, windows, coreutils]
---

WinuxCmd 的 [`v0.11.1`](https://github.com/caomengxuan666/WinuxCmd/releases/tag/v0.11.1) 不是只加几个命令。

这轮相关提交里有三类工作：

- [`a12a733`](https://github.com/caomengxuan666/WinuxCmd/commit/a12a73344f120b8de9af3963c453ebacef633515)：把 20 多个命令里“解析了但没真正生效”的选项接到逻辑里。
- [`4fe10c8`](https://github.com/caomengxuan666/WinuxCmd/commit/4fe10c810abcba48eb2f0e98565162e63268a50a)：加 `stty`、`dir`、`vdir`、`dircolors`、`chgrp`。
- [`4caaf61`](https://github.com/caomengxuan666/WinuxCmd/commit/4caaf6174b97f1188fef3a33ca838881b1933f2c)：加 `strings`、`hexdump`、`col`、`more`。

做这类工具时，最容易低估的是“选项存在”和“行为可用”之间的差距。CLI 可以接受 `--sort-keys`、`--strict`、`--one-file-system`，但如果解析完没有进入输出逻辑，那它对用户来说就是假兼容。

Windows 上实现 GNU coreutils 还会遇到另一层问题：有些语义本来就不是一一对应的。比如权限、组、终端模式、设备文件、管道行为，都不能简单照搬 Unix 实现。这里更像是在做一组实用兼容层，而不是追求字面复刻。

所以我觉得 v0.11.1 的重点不是“命令数量增加到多少”，而是开始把 option wiring、测试和文档一起补齐。命令越多，越需要靠测试证明某个参数真的改变了行为。
