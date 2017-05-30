// 入力: Array[Int]
// 出力: 各要素の2乗和
function squareMath(arr){
    const squareArr = arr.map((e) => Math.pow(e, 2))
    return squareArr.reduce((a, b) => a + b , 0)
}

module.exports = squareMath
