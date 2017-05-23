function AddSecondArg(str1, str2){
  let result = str1

  for(let i = 0; i < 3; i++ ){
    result += ` ${str2}`
  }

  return result
}


module.exports = AddSecondArg
