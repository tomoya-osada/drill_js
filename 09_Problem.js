// 入力: 文字列
// 出力: 5文字目に'Z'を挿入して出力する

function InsertString(str, index){
 return str.slice(0, index) + "Z" + str.slice(index, str.length)
}

module.exports = InsertString