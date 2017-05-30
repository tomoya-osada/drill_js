// test/someTest.js
const assert = require("assert")
const myMethod = require("../08_1_LowString")

describe("probrems8", () => {
  it("任意の変数X文字目を小文字にするメソッドを作成せよ", () => {
      const input1 = "GITHUB"
      const input2 = 5
      const output = myMethod(input1, input2)
      assert.equal("GITHuB" , output) // Array, Objectの場合はassert.deepEqual。
  })
})
