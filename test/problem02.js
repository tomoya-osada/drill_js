// test/someTest.js
const assert = require("assert")
const myMethod = require("../02_addEn")


describe("problems2", () => {
  it("XX数値を受けとって、円をつけて返す", () => {
      const input = 39
      const output = myMethod(input)
      assert.equal("39円" , output) // Array, Objectの場合はassert.deepEqual。
  })
})
