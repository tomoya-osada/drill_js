const assert = require("assert")
const myMethod = require("../36_Problem")

describe("problems36", () => {
  it("# [ [偶数値], [奇数値] ]の形で返す ", () => {
      const input = [1,2,3,4,5,6,7,8,9]
      const output = myMethod(input)
      assert.deepEqual([[2,4,6,8], [1,3,5,7,9]] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
