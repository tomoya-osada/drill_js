const assert = require("assert")
const myMethod = require("../30_Problem")

describe("problems30", () => {
  it("入力されたarrayを3回繰り返したarray", () => {
      const input = ["hoge", "fuga"]
      const output = myMethod(input)
      assert.deepEqual(["hoge", "fuga", "hoge", "fuga", "hoge", "fuga"] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
