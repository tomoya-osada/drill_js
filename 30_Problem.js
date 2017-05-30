// 入力: Array
// 出力: 入力されたarrayを3回繰り返したarray
function RepeatArray(array){
    const nestedArray = Array.from({length: 3}, (v) => array)
    return nestedArray.reduce((a, b) => { return a.concat(b) })
}

module.exports = RepeatArray
