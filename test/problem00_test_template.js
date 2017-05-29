const assert = require("assert")
const myMethod = require("../XX_Problem")


describe("probremsXX", () => {
  it("# XX", () => {
      const input = "some input "
      const output = myMethod(input)
      assert.equal("expect" , output) // Array, Objectの場合はassert.deepEqual。
  })
})
