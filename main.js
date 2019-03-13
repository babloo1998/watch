function showtime() {
var a = new Date();
var h = a.getHours();
var m= a.getMinutes();
var s= a.getSeconds();

if(h == 0){
h = 12;
}

if(h > 12){
h = h - 12;
session = "PM";
}

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

var time = h + ":" + m + ":" + s + " " + session;

document.getElementById("digital-clock").innerText = time;
setTimeout(showtime, 1000);
 
}



