const assert = require("assert")
const myMethod = require("../37_Problem")

describe("problems37", () => {
  it("要素がすべて正の数であるかの判定結果", () => {
      const input = [1, 2, 3, 3.4]
      const output = myMethod(input)
      assert.equal(true , output) // Array, Objectの場合はassert.deepEqual。
  })

  it("要素がすべて正の数であるかの判定結果", () => {
      const input = [3, -1]
      const output = myMethod(input)
      assert.equal(false , output) // Array, Objectの場合はassert.deepEqual。
  })
})
