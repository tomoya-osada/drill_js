// 入力: Array
// 処理: 3番目と5番目の要素が同じかを判定する。要素数が5以下の時はfalseを返す 

function CompareIndex(array){
    if (array.lengh <= 5){
        return false 
     }
    return array[2] === array[4]
}

module.exports = CompareIndex
