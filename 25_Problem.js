// Array#zipを調べて、一つメソッドを作れ
function ArrayZip(){
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const arr3 = [7, 8, 9]

    return arr1.map((e, i) => {
        return [e, arr2[i], arr3[i]]
    })
}

module.exports = ArrayZip
