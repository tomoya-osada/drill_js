function LowString(str, lowTarget){
  const strLength = str.length
  const startStr = str.substring(0,lowTarget-1)
  const endStr = str.substring(lowTarget-1, strLength).charAt(0).toLowerCase() +  str.substring(lowTarget, strLength)
  return startStr + endStr
}

module.exports = LowString
