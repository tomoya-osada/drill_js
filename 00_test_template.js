// test/someTest.js
const assert = require("assert")
const myMethod = require("../someMethod")


describe("probrems", () => {
  it("# XX", () => {
      const input = "some input "
      const output = myMethod(input)
      assert.equal("expect" , output) // Array, Objectの場合はassert.deepEqual。
  })
})
