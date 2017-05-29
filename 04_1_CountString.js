function CountString(arr){
  const str = arr.join(',')
  return (str.match(/a/g) || []).length
}

module.exports = CountString
