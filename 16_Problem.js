// 入力: Array
// 出力: 末尾に'TAIL!'を挿入した結果

function PushArray(array){
    return [...array, "TAIL!"]
}

module.exports = PushArray
