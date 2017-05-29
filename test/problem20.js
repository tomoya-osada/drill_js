const assert = require("assert")
const myMethod = require("../20_Problem")

describe("problemsXX", () => {
  it("# XX", () => {
      const input = ["hoge", "hoge", "fuga", "foo"]
      const output = myMethod(input)
      assert.equal(true , output) // Array, Objectの場合はassert.deepEqual。
  })
})
