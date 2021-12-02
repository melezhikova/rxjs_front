export function getTime(timestamp) {
  const time = new Date(timestamp);
  let month = time.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let date = time.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${hours}:${minutes} ${date}.${month}.${time.getFullYear()}`;
}

export function getSubject(text) {
  if (text.length > 15) {
    return `${text.substring(0, 15)}...`;
  }
  return text;
}
