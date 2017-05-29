// filter関数を使い、20歳以下だけにしろ
function FilterObject(object){
    return object.filter((element) => element.age <= 20)
}

module.exports = FilterObject
