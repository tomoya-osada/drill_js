// 追加問題： 4-1 問題4で、引数を配列として扱う関数を作れ
const assert = require("assert")
const myMethod = require("../04_1_CountString")


describe("probrems4", () => {
  it("入力された文字列に何回'a'が使われているかを数字で返す", () => {
      const input = ["Hasta La Vista Baby", "Hasta La Vista Baby"]
      const output = myMethod(input)
      assert.equal(10 , output) // Array, Objectの場合はassert.deepEqual。
  })
})
