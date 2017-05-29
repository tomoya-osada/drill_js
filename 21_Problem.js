// 入力: Array
// 処理: 配列の要素をランダムに一つ返す
function RandomArrayElement(array){
    return array[Math.floor(Math.random() * array.length)]
}

module.exports = RandomArrayElement