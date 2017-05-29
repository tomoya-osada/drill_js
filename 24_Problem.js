// 入力: Array
// 処理: 各要素のindexを3つふやす
function IndexOfArray(array){
    return array.map((value, index, self) => {
        if (self[index+2] <= self.length){
            return self[index+2]
        }else{
            return self[index-3]
        }
    })
}

module.exports = IndexOfArray
