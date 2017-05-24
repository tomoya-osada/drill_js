// test/someTest.js
const assert = require("assert")
const myMethod = require("../06_CountString3")

describe("probrems6", () => {
  it("文字列を受け取って、文字列全体の長さを返す", () => {
      const input = "supercalifragilisticexpialidocious"
      const output = myMethod(input)
      assert.equal(34 , output) // Array, Objectの場合はassert.deepEqual。
  })
})
