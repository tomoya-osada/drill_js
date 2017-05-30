// 入力: Array[Int]
// 処理: 要素がすべて正の数であるかの判定結果
function checkPositiveNumber(arr){
    const negativeNumberArr = arr.filter((e) => e < 0)
    return negativeNumberArr.length > 0 ? false : true
}

module.exports = checkPositiveNumber

