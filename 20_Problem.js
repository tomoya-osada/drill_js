// 入力: Array
// 処理: 重複要素が存在するかを判定する

function CheckIncludeDuplicate(array){
    return array.some((element, index, self) => {
        return self.indexOf(element) !== self.lastIndexOf(element)
    });
}

module.exports = CheckIncludeDuplicate
