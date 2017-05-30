// 2020年東京オリンピックまでのカウントダウンを作れ。
function countdownOlympic(olympicDate, currentDate){
  const olympic = new Date(olympicDate)
  const current = new Date(currentDate)

  return (olympic.getTime() - current.getTime())/86400000;
}

module.exports = countdownOlympic