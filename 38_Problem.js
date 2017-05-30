// ２つの関数fn1, fn2を受け取り、その２つを実行した結果を返す関数を作れ
const input = 3

function execfunction(func1, func2) {
    return func2(func1(input))
}

module.exports = execfunction