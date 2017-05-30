const assert = require("assert")
const myMethod = require("../35_Problem")

describe("problems35", () => {
  it("偶数値のみを配列として取り出す ", () => {
      const input = [1,2,3,4,5,6,7,8]
      const output = myMethod(input)
      assert.deepEqual([2,4,6,8] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
