function ArrayLength(str){
  const array = str.split("\n")
  return array.map((str) => str.length)
}

module.exports = ArrayLength
