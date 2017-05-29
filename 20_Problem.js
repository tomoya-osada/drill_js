// 入力: Array
// 処理: 重複要素が存在するかを判定する

function CheckIncludeDuplicate(array){
    const checkDuplicateArray = array.filter((element, index, self) => self.indexOf(element) === index )
    if (array.length === checkDuplicateArray.length){
        return false;
    }
    return true;
}

module.exports = CheckIncludeDuplicate
