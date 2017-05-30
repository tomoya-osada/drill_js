const assert = require("assert")
const myMethod = require("../27_Problem")

describe("problems27", () => {
  it("3番目と5番目の要素が同じかを判定する。", () => {
      const input = [12,14,16,18,16,32,60]
      const output = myMethod(input)
      assert.equal(true , output) // Array, Objectの場合はassert.deepEqual。
  })

  it("要素数が5以下の時はfalseを返す", () => {
      const input = [12,14,16,18]
      const output = myMethod(input)
      assert.equal(false , output) // Array, Objectの場合はassert.deepEqual。
  })
})
