const assert = require("assert")
const myMethod = require("../14_Problem")

describe("problems14", () => {
  it("filter関数を使い、20歳以下だけにしろ", () => {
      const input = [ { name: "taro", age: 22} , { name: "hanako", age: 19} ]
      const output = myMethod(input)
      assert.deepEqual([ { name: "hanako", age: 19} ] , output) // Array, Objectの場合はassert.deepEqual。
  })
})
