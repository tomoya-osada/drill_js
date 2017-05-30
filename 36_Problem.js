// 入力: Array[Int]
// 処理: [ [偶数値], [奇数値] ]の形で返す
function selectEvenOdd(arr){
    return arr.reduce((memo, item) => (item % 2 == 0 ? memo[0].push(item) : memo[1].push(item), memo) , [[],[]])
}

module.exports = selectEvenOdd
