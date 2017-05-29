// 入力: Array
// 処理: 入力値からnilを取り除いて出力する
function CompactArray(array){
    return array.filter((element) => element !== null)
}

module.exports = CompactArray
