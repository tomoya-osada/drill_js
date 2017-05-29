const assert = require("assert")
const myMethod = require("../15_Problem")

describe("problems15", () => {
  it("先頭に'HEAD!'を挿入した結果を返す", () => {
      const input = ["hoge", "fuga", "foo"]
      const output = myMethod(input)
      assert.deepEqual(["HEAD!","hoge", "fuga", "foo"] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
