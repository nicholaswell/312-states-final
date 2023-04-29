// Open and Close for Hamburger Menu

$(".hamburger").click(function(){
    $("#open-bars").css("display","none");
})

$(".close").click(function(){
    $("#open-bars").css("display","block");
})

// Toggle Tooltips 
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })