// 入力: Array[Int]
// 処理: 大きさに対して降順にする
function SortDesc(array){
    return array.sort((a, b) => b - a)
}

module.exports = SortDesc
