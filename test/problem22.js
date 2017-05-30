const assert = require("assert")
const myMethod = require("../22_Problem")

describe("problems22", () => {
  it("大きさに対して降順にする", () => {
      const input = [11,4,60,12]
      const output = myMethod(input)
      assert.deepEqual([60,12,11,4] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
