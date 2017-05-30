const assert = require("assert")
const myMethod = require("../40_Problem")

describe("problems40", () => {
  it("日付フォーマットを変更せよ", () => {
      const input = "2017-01-27"
      const output = myMethod(input)
      assert.equal("2017年01月27日" , output) // Array, Objectの場合はassert.deepEqual。
  })
})
