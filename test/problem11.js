const assert = require("assert")
const myMethod = require("../11_Problem")


describe("probrems11", () => {
  it("1から10までの配列を出力せよ", () => {
      const input = 5
      const output = myMethod(10)
      assert.deepEqual([1,2,3,4,5,6,7,8,9,10] , output) // Array, Objectの場合はassert.deepEqual。
  })
})


