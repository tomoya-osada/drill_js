const assert = require("assert")
const myMethod = require("../31_Problem")

describe("problems31", () => {
  it("Array1の末尾にArray2が連結した配列", () => {
      const input1 = ["hoge", "fuga"]
      const input2 = ["foo", "piyo"]
      const output = myMethod(input1, input2)
      assert.deepEqual(["hoge", "fuga", "foo", "piyo"] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
