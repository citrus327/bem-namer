# @citrus327/bem-namer

![Download](https://img.shields.io/npm/dw/@citrus327/bem-namer)
![Version](https://img.shields.io/npm/v/@citrus327/bem-namer)

A simplified version of BEM name generator

## Installation

```sh
pnpm install @citrus327/bem-namer
```

## Usage

```ts
import { bem } from '@citrus327/bem-namer';

const { b, m } = bem("user-card")

expect(b()).toBe("user-card")
expect(b("container")).toBe("user-card-container")
expect(m("primary")).toBe("user-card--primary")
expect(m("container", "primary")).toBe("user-card-container--primary")

```
