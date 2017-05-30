const assert = require("assert")
const myMethod = require("../10_Problem")


describe("probrems10", () => {
  it("各行毎の文字列の長さの配列", () => {
      const input = "これぜんぶ\nおかねだったら\nいいのにな";
      const output = myMethod(input)
      assert.deepEqual([5, 7, 5] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
