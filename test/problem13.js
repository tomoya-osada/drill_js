const assert = require("assert")
const myMethod = require("../13_Problem")

describe("problems13", () => {
  it("reduce関数を使い、range関数で作成した結果の合計を計算せよ", () => {
      const input1 = 20
      const input2 = 5
      const output = myMethod(input1, input2)
      assert.equal(110 , output) // Array, Objectの場合はassert.deepEqual。
  })
})
