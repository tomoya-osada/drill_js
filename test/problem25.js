const assert = require("assert")
const myMethod = require("../25_Problem")

describe("problems25", () => {
  it("// Array#zipを調べて、一つメソッドを作れ", () => {
      const output = myMethod()
      assert.deepEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
