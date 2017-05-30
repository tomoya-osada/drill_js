// 入力: Array1, Array2
// 処理: ２つの配列の共通要素を配列として返す

function ReturnCommonArray(arr1, arr2){
    const excludeDuplicatedArr1 = arr1.filter((e, i, self) => self.indexOf(e) === i);
    const excludeDuplicatedArr2 = arr2.filter((e, i, self) => self.indexOf(e) === i);
    const mergeArray = excludeDuplicatedArr1.concat(excludeDuplicatedArr2)
    return mergeArray.filter((e, i, self) => self.indexOf(e) ===i && i !== self.lastIndexOf(e))
}

module.exports = ReturnCommonArray
