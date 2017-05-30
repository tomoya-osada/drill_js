// reduce関数を使い、range関数で作成した結果の合計を計算せよ
function ArrayRangeSum(start, itemLength){
    const arrayRange = Array.from({length: itemLength}, (v, i) => start + i)
    return arrayRange.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}

module.exports = ArrayRangeSum