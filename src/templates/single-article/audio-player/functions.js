export const secondsToTime = totalSeconds => {
  var  sec_num = parseInt(totalSeconds, 10)
  var  hours   = Math.floor(sec_num / 3600)
  var  minutes = Math.floor((sec_num - (hours * 3600)) / 60)
  var  seconds = sec_num - (hours * 3600) - (minutes * 60)

  hours = hours < 1 ? '' : hours + ':'
  if (minutes < 10) {minutes = "0"+minutes}
  if (seconds < 10) {seconds = "0"+seconds}
  return hours + '' + minutes + ':' + seconds
}

export const incrementTime = ({
  timeElapsed,
  duration
}) => {
  let newTime = timeElapsed + 1 

  if (newTime > duration) newTime = duration

  return Math.floor(newTime)
}