/**
 * Created by amyqing719@gmail.com on 2017/2/4.
 */

/*var custom = $("#custom");
var startLength = 0;
var endLength = 70;
custom.hover(function(){
    // alert(1);
    $("#customContent").animate({width:endLength+"px"},"slow");
    $("#customTriggle").animate({left:endLength+"px"},"slow");
},function(){
    $("#customContent").animate({width:startLength+"px"},"slow");
    $("#customTriggle").animate({left:startLength+"px"},"slow");
});*/
// 滑入展开，滑出缩进
var startLength = 0;
var endLength = 200;
var custom = document.getElementById("custom");
var customContent = document.getElementById("customContent");
var customTriggle = document.getElementById("customTriggle");
custom.onmouseover = function () {
    /*alert(1);*/
    var startLeft = customContent.offsetLeft;
    customContent.style.width=startLeft+endLength+"px";
    customTriggle.style.right = startLeft+endLength+"px";
}
custom.onmouseout = function () {
    customContent.style.width=startLength+"px";
    customTriggle.style.right = startLength+"px";
}