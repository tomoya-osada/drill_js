const assert = require("assert")
const myMethod = require("../32_Problem")

describe("problems32", () => {
  it(" -で連結した文字列", () => {
      const input = ["お金も","土地も","ほしい"]
      const output = myMethod(input)
      assert.equal("お金も-土地も-ほしい" , output) // Array, Objectの場合はassert.deepEqual。
  })
})
