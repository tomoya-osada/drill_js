const assert = require("assert")
const myMethod = require("../23_Problem")

describe("problems23", () => {
  it("入力値を逆順にする", () => {
      const input = ["hoge", "fuga", "foo", "piyo"]
      const output = myMethod(input)
      assert.deepEqual(["piyo", "foo", "fuga", "hoge"] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
