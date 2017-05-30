const assert = require("assert")
const myMethod = require("../16_Problem")

describe("problems16", () => {
  it("入力: Array 末尾に'TAIL!'を挿入した結果", () => {
      const input = ["hoge", "fuga", "foo"]
      const output = myMethod(input)
      assert.deepEqual(["hoge", "fuga", "foo", "TAIL!"] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
