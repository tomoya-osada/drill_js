// 入力: Array1, Array2
// 処理: ２つの配列の共通要素を配列として返す

function ReturnCommonArray(array1, array2){
    const mergeArray = array1.concat(array2) 
    console.log(mergeArray)
    return mergeArray.filter((e, i, self) => self.indexOf(e) ===i && i !== self.lastIndexOf(e))
}

module.exports = ReturnCommonArray
