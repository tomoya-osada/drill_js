const assert = require("assert")
const myMethod = require("../28_Problem")

describe("problems28", () => {
  it("２つの配列の共通要素を配列として返す", () => {
      const input1 = [12, 39, 99, 100, 50]
      const input2 = [11, 39, 2, 50, 17]
      const output = myMethod(input1, input2)
      assert.deepEqual([39, 50] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
