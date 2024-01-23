import { it, describe, expect } from "vitest"
import { bem } from "../src"

describe("simple", () => {
  it("should equal with initials", () => {
    const { b } = bem("user-card")
    expect(b()).toBe("user-card")
  })

  it("should add block", () => {
    const { b } = bem("user-card")
    expect(b("container")).toBe("user-card-container")
  })

  it("should add modifier", () => {
    const { m } = bem("user-card")
    expect(m("primary")).toBe("user-card--primary")
  })

  it("should add modifier with block", () => {
    const { m } = bem("user-card")
    expect(m("container", "primary")).toBe("user-card-container--primary")
  })
})
