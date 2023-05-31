var date = new Date();
var month = date.getMonth();
var day = date.getDay();
var year = date.getFullYear();
var tareekh = date.getDate();
var monthArr = ["January", "February", "March", "April", "May", "June", "July","August","September", "October", "November", "December"];
var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function setTime(){
    document.getElementById('m').innerHTML = monthArr[month];
    document.getElementById('d').innerHTML = dayArr[day];
    document.getElementById('t').innerHTML = tareekh;
    document.getElementById('y').innerHTML = year;
}
setTime()