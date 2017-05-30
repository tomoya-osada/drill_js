// 入力: 要素数, 初期値
// 出力:  入力された要素数、初期値をもつ配列

function CreateArray(index, initialValue){
    return Array.from({length: index}).fill(initialValue)
}

module.exports = CreateArray
