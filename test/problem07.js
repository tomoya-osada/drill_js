// test/someTest.js
const assert = require("assert")
const myMethod = require("../07_LowString")

describe("problems6", () => {
  it("文字列を受け取って、文字列全体の長さを返す", () => {
      const input = "GITHUB"
      const output = myMethod(input)
      assert.equal("GItHUB" , output) // Array, Objectの場合はassert.deepEqual。
  })
})
