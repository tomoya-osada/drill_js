const assert = require("assert")
const myMethod = require("../26_Problem")

describe("problemsXX", () => {
  it("# XX", () => {
      const input = [1,2,3,4,5,6,7,8]
      const output = myMethod(input)
      assert.deepEqual([2,3,4,5] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
