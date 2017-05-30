// test/someTest.js
const assert = require("assert")
const myMethod = require("../09_Problem")

describe("probrems9", () => {
  it("5文字目に'Z'を挿入して出力する", () => {
      const input1 = "Tesla"
      const input2 = 5
      const output = myMethod(input1, input2)
      assert.equal("TeslaZ" , output) // Array, Objectの場合はassert.deepEqual。
  })
})
