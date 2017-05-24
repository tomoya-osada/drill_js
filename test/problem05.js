// test/someTest.js
const assert = require("assert")
const myMethod = require("../05_CountString2")


describe("probrems5", () => {
  it("文字列1中に文字列2が何個含まれるかの判定 ", () => {
      const input1 = "Veni, vidi, vici"
      const input2 = "vi"
      const output = myMethod(input1, input2)
      assert.equal(2 , output) // Array, Objectの場合はassert.deepEqual。
  })
})
