const assert = require("assert")
const myMethod = require("../24_Problem")

describe("problems24", () => {
  it("各要素のindexを3つ増やす", () => {
      const input = [1, 2, 3, 4, 5]
      const output = myMethod(input)
      assert.deepEqual([3, 4, 5, 1, 2] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
