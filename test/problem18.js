const assert = require("assert")
const myMethod = require("../18_Problem")

describe("problems18", () => {
  it("入力値からnilを取り除いて出力する", () => {
      const input = ["hoge",null,"fuga"]
      const output = myMethod(input)
      assert.deepEqual(["hoge","fuga"] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
