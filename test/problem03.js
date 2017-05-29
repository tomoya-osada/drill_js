// test/someTest.js
const assert = require("assert")
const myMethod = require("../03_AddSecondArg")


describe("problems3", () => {
  it("単語を2つとって、「(1つ目の単語) (2つ目の単語) (2つ目の単語) (2つ目の単語)」", () => {
      const input1 = 'Hello'
      const input2 = 'World'
      const output = myMethod(input1, input2)
      assert.equal("Hello World World World" , output) // Array, Objectの場合はassert.deepEqual。
  })
})
