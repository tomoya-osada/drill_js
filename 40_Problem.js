// 日付フォーマットを変更せよ
function dateFormatChange(target){
    const date = new Date(target)
    const yyyy = date.getFullYear();
    const mm = ('0' + date.getMonth() + 1).slice(-2);
    const dd = ('0' + date.getDate()).slice(-2);

    return `${yyyy}年${mm}月${dd}日`
}

module.exports = dateFormatChange
