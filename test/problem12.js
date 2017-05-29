const assert = require("assert")
const myMethod = require("../12_Problem")

describe("problems12", () => {
  it("1つ目の入力を受け、2つ目の入力まで出力するrange関数を作れ", () => {
      const input1 = 20
      const input2 = 5
      const output = myMethod(input1, input2)
      assert.deepEqual([20, 21, 22, 23, 24] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
