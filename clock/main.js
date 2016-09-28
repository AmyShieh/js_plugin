window.onload = function(){
    function $(id){
        return document.getElementById(id);
    }
    //获取针的id
    var clock = $("clock");
    var hours = $("h");
    var minutes = $("m");
    var seconds = $("s");
    //获取当前时间
    setInterval(function time(){
        var date = new Date();
        var ms = date.getMilliseconds();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var h = date.getHours();

        var sec = s+ms/1000;
        var min = m+sec/60;
        var hour = h%12+m/60;

        seconds.style.transform ="rotate("+sec*6+"deg)";
        minutes.style.transform ="rotate("+min*6+"deg)";
        hours.style.transform ="rotate("+hour*30+"deg)";
        /*console.log(hours);*/
        console.log(hour+"时"+min+"分"+sec+"秒 ");
    },1000);

}