---
title: "cxxmcp conformance 跑出来的 SEP-2243 问题"
description: "cxxmcp 在跑 MCP conformance 时发现一个矛盾：测试要求服务器拒绝缺失 Mcp-Method 的请求，但 reference client 自己没有发送这个 header。"
date: 2026-05-29
updated: 2026-05-30
tags: [cxxmcp, mcp, conformance]
---

这次问题不是 cxxmcp 自己的单点 bug，而是 conformance、spec 和多个 SDK 之间的互操作问题。

SEP-2243 要求 MCP HTTP POST 请求带这些 header：

- `Mcp-Method`：每个 POST 都要带，值来自 JSON-RPC `method`。
- `Mcp-Name`：当请求里有 `params.name` 或 `params.uri` 时带上。

跑 cxxmcp conformance 时出现了一个矛盾：`http-header-validation / ServerRejectsMissingMethodHeader` 测试要求服务器拒绝缺失 `Mcp-Method` 的请求；但 conformance 里其他场景用的 TypeScript SDK `StreamableHTTPClientTransport` 本身没有发送这个 header。

所以结果会变成两难：

- 如果服务器严格实现 SEP-2243，很多 SDK-backed 场景会失败。
- 如果服务器为了兼容 TypeScript SDK 放宽校验，`ServerRejectsMissingMethodHeader` 又会失败。

我把这个问题拆成了几组 issue：

- [modelcontextprotocol/conformance#323](https://github.com/modelcontextprotocol/conformance/issues/323)：conformance suite 自相矛盾。
- [modelcontextprotocol/typescript-sdk#2176](https://github.com/modelcontextprotocol/typescript-sdk/issues/2176)：TypeScript SDK 没有发送 `Mcp-Method` / `Mcp-Name`。
- [python-sdk#2715](https://github.com/modelcontextprotocol/python-sdk/issues/2715)、[ruby-sdk#366](https://github.com/modelcontextprotocol/ruby-sdk/issues/366)、[java-sdk#990](https://github.com/modelcontextprotocol/java-sdk/issues/990)、[kotlin-sdk#787](https://github.com/modelcontextprotocol/kotlin-sdk/issues/787)、[swift-sdk#228](https://github.com/modelcontextprotocol/swift-sdk/issues/228)：让各语言 SDK 补齐同一组 header。

这件事对 cxxmcp 的意义是：conformance 不是“跑过就完了”。当测试、reference client 和 spec 互相打架时，SDK 要么把问题记录清楚，要么就在实现里留下一个说不清的兼容分支。

我现在更倾向于把这类问题写进 release evidence：哪些失败来自自己，哪些来自上游，哪些是 spec/SDK 之间的行为差异。否则 109/110、447/447 这种数字看起来很清楚，实际解释成本仍然很高。
