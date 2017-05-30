// 入力: Array
// 処理: 各要素のindexを3つふやす
function IndexOfArray(arr){
    const arrSplice = arr.splice(0, 2)
    return arr.concat(arrSplice)

    // return array.map((value, index, self) => {
    //     if (self[index+2] <= self.length){
    //         return self[index+2]
    //     }else{
    //         return self[index-3]
    //     }
    // })
}

module.exports = IndexOfArray
