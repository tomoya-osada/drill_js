const assert = require("assert")
const myMethod = require("../41_Problem")

describe("problems41", () => {
  it("日付＋時間をunixtimeにせよ", () => {
      const input = "2017-01-27 10:00:00"
      const output = myMethod(input)
      assert.equal(1485478800 , output) // Array, Objectの場合はassert.deepEqual。
  })
})
