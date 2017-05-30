// 入力: Array
// 出力: 入力されたarrayを3回繰り返したarray
function RepeatArray(arr){
    const nestedArray = Array.from({length: 3}, (v) => arr)
    return nestedArray.reduce((a, b) => { return [...a].concat(b) }, [])
}

module.exports = RepeatArray
