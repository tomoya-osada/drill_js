// 日付＋時間をunixtimeにせよ
function changeUnixTime(targetDate){
  const date = new Date(targetDate)
  return date.getTime() / 1000  //秒単位
}

module.exports = changeUnixTime
