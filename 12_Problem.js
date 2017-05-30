// 1つ目の入力を受け、2つ目の入力まで出力するrange関数を作れ
function ArrayRange(start, itemLength){
    return Array.from({length: itemLength}, (v, i) => start + i)
}

module.exports = ArrayRange
