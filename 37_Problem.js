// 入力: Array[Int]
// 処理: 要素がすべて正の数であるかの判定結果
function checkPositiveNumber(arr){
    return arr.every((element) => element > 0 )
}

module.exports = checkPositiveNumber

