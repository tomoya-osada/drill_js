function CreateArray(int){
    return [...Array(int).keys()].map((v, i) => i + 1 )
}

module.exports = CreateArray
