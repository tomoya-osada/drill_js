const assert = require("assert")
const myMethod = require("../20_Problem")

describe("problems20", () => {
  it("重複要素が存在するかを判定する", () => {
      const input = ["hoge", "hoge", "fuga", "foo"]
      const output = myMethod(input)
      assert.equal(true , output) // Array, Objectの場合はassert.deepEqual。
  })
})
