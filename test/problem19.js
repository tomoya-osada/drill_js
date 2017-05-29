const assert = require("assert")
const myMethod = require("../19_Problem")

describe("problems19", () => {
  it("入力: Array, 処理: 重複要素を解消する", () => {
      const input = ["hoge", "hoge", "fuga", "foo"]
      const output = myMethod(input)
      assert.deepEqual(["hoge", "fuga", "foo"] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
