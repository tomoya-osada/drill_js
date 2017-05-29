// test/someTest.js
const assert = require("assert")
const myMethod = require("../04_CountString")


describe("problems4", () => {
  it("入力された文字列に何回'a'が使われているかを数字で返す", () => {
      const input = "Hasta La Vista Baby"
      const output = myMethod(input)
      assert.equal(5 , output) // Array, Objectの場合はassert.deepEqual。
  })
})
