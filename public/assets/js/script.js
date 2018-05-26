$(document).ready(function() {
    $(".about").hide()
    $(".aboutLink").hide()
    $(".techLink").hide()
    $(".tech").hide()
    $(".icon-scroll").hide()

    setTimeout(function () { 
        $(".aboutLink").fadeIn("slow"); 
    }, 2000);
    setTimeout(function () {
        $(".icon-scroll").fadeIn("slow");
    }, 4000);
    setTimeout(function () {
        $(".techLink").fadeIn("slow");
    }, 3000);

    $(".aboutLink").click(function(){
        $(".about").fadeIn("slow");
    })
    $(".techLink").click(function () {
        $(".tech").fadeIn("slow");
    })
})