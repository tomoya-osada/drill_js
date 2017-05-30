const assert = require("assert")
const myMethod = require("../38_Problem")

describe("problems38", () => {
  it(" ２つの関数fn1, fn2を受け取り、その２つを実行した結果を返す関数を作れ", () => {
      const func1 = (i) => { return i * 5}
      const func2 = (i) => { return i + 10}
      const output = myMethod(func1, func2)
      assert.equal(25 , output) // Array, Objectの場合はassert.deepEqual。
  })
})
