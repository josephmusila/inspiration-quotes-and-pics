$(document).ready(function(){
   $("#home1-text").fadeIn(2000);

   //card details
   $("#details-header").accordion();
   $("#details-header1").accordion();
   $("#details-header2").accordion();




});
//display more images

$(function () {
    $("#moore").click(function () {
      $("#more").show(3000);
    });
    $("#close").click(function () {
      $("#more").hide(3000);
    });
    
});
$(function(){
   $("#say").click(function(){
     $("#say").animate({color:"black"});
   });
});
