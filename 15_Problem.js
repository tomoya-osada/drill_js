// 入力: Array
// 先頭に'HEAD!'を挿入した結果を返す
function InsertHead(array){
    // array.unshift("HEAD!")
    return ["HEAD!", ...array]
}

module.exports = InsertHead
