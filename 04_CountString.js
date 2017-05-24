function CountString(str){
  return (str.match(/a/g) || []).length
}

module.exports = CountString
