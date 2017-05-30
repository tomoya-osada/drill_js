const assert = require("assert")
const myMethod = require("../34_Problem")

describe("problems34", () => {
  it("出力: 各要素の2乗和", () => {
      const input = [3, 4]
      const output = myMethod(input)
      assert.equal(25 , output) // Array, Objectの場合はassert.deepEqual。
  })
})
