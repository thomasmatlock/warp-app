export default function convertToSeconds(timeString: string) {
  // console.log(timeString);

  // let timeString = '00:00:00';
  const timeArray = timeString.split(':');
  let seconds = 0;
  for (let i = 0; i < timeArray.length; i++) {
    seconds += parseInt(timeArray[i]) * Math.pow(60, timeArray.length - 1 - i);
  }
  // console.log(seconds, 'seconds');
  return seconds;
}
