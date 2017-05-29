// test/someTest.js
const assert = require("assert")
const myMethod = require("../01_Hello")

describe("problems1", () => {
  it("呼び出すとHello Worldを返すメソッド", () => {
      const output = myMethod()
      assert.equal("Hello World" , output) // Array, Objectの場合はassert.deepEqual。出力が面倒だったらassertしなくてもいい
  })
})
