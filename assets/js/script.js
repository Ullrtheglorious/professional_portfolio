// moving the background on mouse 

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;
var lastClicked = 'home';

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.bg').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function (e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;

});

moveBackground();
// moving the buttons
//var transition = false;
// on click for "home" reset top three button 
$("#about").unbind("click").click(function () {
    if(lastClicked === 'home'){
        myMove();
    }
    lastClicked = 'about';
    console.log("clicked")
})
// on click for "contact me" to move top buttons
$("#contact").unbind("click").click(function () {
    if (lastClicked === 'home') {
        myMove();
    }
    lastClicked = 'contact';
    console.log("clicked")
})
// on click for "about me" to move top buttons
$("#home").click(function () {
    if (lastClicked !== 'home') {
        reset();
    }
    lastClicked = 'home';
    console.log("clicked")
})
// my move function for moving all three buttons
function myMove() {
    var transition = false;
    $(".trans").fadeOut("slow");
    myMove2();
    myMove3();
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 440 || transition == true) {
            clearInterval(id);
            transition = true;
        } else {
            pos += 4;
            elem.style.right = pos + 'px';
            //setTimeout(time, 2000)
        }
    }
}
// move 2 linked into main move function
function myMove2() {
    var transition = false;
    var elem = document.getElementById("animate2");
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 440 || transition == true) {
            clearInterval(id);
            transition = true;
        } else {
            pos+= 4;
            elem.style.right = pos + 'px';
            //setTimeout(time, 2000)
        }
    }
}
// move 3 linked into main move function, need two for distance differences 
function myMove3() {
    var transition = false;
    var elem = document.getElementById("animate3");
    var x = 0;
    var y = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (x == 700 || y == 136 || transition == true) {
            clearInterval(id);
            transition = true;
        } else {
            x += 5;
            y ++;
            elem.style.top = y + 'px';
            elem.style.right = x + 'px';
            //setTimeout(time, 2000)
            
        }
    }
}
// reset funciton to bring both buttons back to starting positions
function reset() {
    $(".trans").fadeIn("slow");
    var elem = document.getElementById("animate");
    var elem1 = document.getElementById("animate2");
    var elem2 = document.getElementById("animate3");
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
        clearInterval(id);
        elem.style = pos;
        elem1.style = pos;
        elem2.style = pos;
        time2();
    }
}  
// function time() {
//     transition = true;
// }
// function time2() {
//     transition = false;
// }
