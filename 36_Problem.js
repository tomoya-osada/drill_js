// 入力: Array[Int]
// 処理: [ [偶数値], [奇数値] ]の形で返す
function selectEvenOdd(arr){
    const evenArr = arr.filter((e) => e % 2 === 0 )
    const oddArr = arr.filter((e) => e % 2 === 1)

    return [evenArr, oddArr]
 }

module.exports = selectEvenOdd
