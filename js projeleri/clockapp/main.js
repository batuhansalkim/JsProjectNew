window.onload = function getTimer(){

    var time = new Date()

    var hour = time.getHours();
    var minute = time.getMinutes();
    var second =  time.getSeconds();

    var day = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();

    hour = hour<10? "0"+hour:hour;
    minute = minute<10? "0"+minute:minute;
    second = second<10? "0"+second:second;
    day = day<10? "0"+day:day;
    month = month<10?"0"+(month+1):month;
    year = year<10? "0"+year:year;


    document.getElementById("hour").innerText =hour+":";
    document.getElementById("minute").innerText =minute+":";
    document.getElementById("second").innerText =second;

    document.getElementById("tarih").innerText=day+"/"+month+"/"+year;
    var inter = setInterval(getTimer,1000);
}