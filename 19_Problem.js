// 入力: Array
// 処理: 重複要素を解消するえ
function DuplicateArray(array){
    return array.filter((element, index, self) => self.indexOf(element) === index)
}

module.exports = DuplicateArray


