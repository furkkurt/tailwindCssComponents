const date = new Date();
const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
let dayIndex = date.getDay();
let day = days[dayIndex];
let monthIndex = date.getMonth();
let month = months[monthIndex];
let dayNum = date.getDate();

document.getElementById("day").innerHTML = day;
document.getElementById("month").innerHTML = month;
document.getElementById("num1").innerHTML = Math.floor(dayNum/10);
document.getElementById("num2").innerHTML = dayNum%10;
