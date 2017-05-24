function LowString(str){
  const strLength = str.length
  const startStr = str.substring(0,2)
  const endStr = str.substring(2, strLength).charAt(0).toLowerCase() +  str.substring(3, strLength)
  return startStr + endStr
}

module.exports = LowString
