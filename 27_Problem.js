// 入力: Array
// 処理: 3番目と5番目の要素が同じかを判定する。要素数が5以下の時はfalseを返す

function CompareIndex(arr){
    if (arr.length <= 5){
        return false
     }
    return arr[2] === arr[4]
}

module.exports = CompareIndex
