export function parseTime(timestamp) {
  let date = new Date(timestamp)
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  
  let a = [y, m, d].map(format);
  let b = [hh, mm, ss].map(format);
  return a.join('-') + ' ' + b.join(':')
}

function format(value) {
  return value < 10 ? ('0' + value) : value.toString();
}