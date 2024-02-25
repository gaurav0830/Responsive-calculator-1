const display=document.getElementById("display");

function appendToDisplay(input){
    display.value +=input;
}
function clearDisplay(){
    display.value ="";
}

function calculate(){
    try{
    display.value=eval(display.value);
    }
    catch(error){
        display.value="ERROR";
    }
}



document.addEventListener("DOMContentLoaded", function() {
setTimeout(function() {
  document.querySelector("body").classList.add("loaded");
}, 10)
});
    
$(document).ready(function(){
$(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
