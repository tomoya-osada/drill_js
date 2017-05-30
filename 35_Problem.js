// 入力: Array[Int]
// 処理: 偶数値のみを配列として取り出す

function createEvenArray(arr){
    return arr.filter((e) => e % 2 === 0 )
}

module.exports = createEvenArray
