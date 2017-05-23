// test/someTest.js
const assert = require("assert")
const myMethod = require("../someMethod") // このメソッドを書くんだ。行儀は悪いがこのテストファイルに書いてもいいぞ


describe("probrems", () => {
  it("# XX", () => {
      const input = "some input "
      const output = myMethod(input)
      assert.equal("expect" , output) // Array, Objectの場合はassert.deepEqual。出力が面倒だったらassertしなくてもいい
  })
})
