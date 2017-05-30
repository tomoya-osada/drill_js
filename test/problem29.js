const assert = require("assert")
const myMethod = require("../29_Problem")

describe("problems29", () => {
  it("出力:  入力された要素数、初期値をもつ配列", () => {
      const input1 = 5
      const input2 = "hoge"
      const output = myMethod(input1, input2)
      assert.deepEqual(["hoge", "hoge","hoge","hoge","hoge"] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
