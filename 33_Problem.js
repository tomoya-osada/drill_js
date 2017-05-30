// 入力: Array[Int]
// 出力: 3の倍数のみ'banana'’に変換した配列

function changeBanana(arr){
    return arr.map((e) => e % 3 === 0 ? "banana" : e )
}

module.exports = changeBanana
