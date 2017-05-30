const assert = require("assert")
const myMethod = require("../33_Problem")

describe("problems33", () => {
  it("3の倍数のみ'banana'’に変換した配列", () => {
      const input = [1,2,3,4,5,6,7,8,9]
      const output = myMethod(input)
      assert.deepEqual([1,2,"banana",4,5,"banana",7,8,"banana"] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
