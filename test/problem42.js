const assert = require("assert")
const myMethod = require("../42_Problem")

describe("problems42", () => {
  it("2020年東京オリンピックまでのカウントダウンを作れ。", () => {
      const input1 = "2020-05-12"
      const input2 = "2017-05-31"
      const output = myMethod(input1, input2)
      assert.equal(1077 , output) // Array, Objectの場合はassert.deepEqual。
  })
})
