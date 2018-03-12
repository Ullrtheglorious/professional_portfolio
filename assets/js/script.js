// moving the background on mouse 

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

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
var transition = false;

function myMove() {
    $(".trans").fadeOut("slow");
    myMove2();
    myMove3();
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 440 || transition == true) {
            clearInterval(id);
        } else {
            pos+= 4;
            elem.style.right = pos + 'px';
            setTimeout(time, 2000)
        }
    }
}
function myMove2() {
    var elem = document.getElementById("animate2");
    var pos = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (pos == 440 || transition == true) {
            clearInterval(id);
          
        } else {
            pos+= 4;
            elem.style.right = pos + 'px';
            setTimeout(time, 2000)
        }
    }
}
function myMove3() {
    var elem = document.getElementById("animate3");
    var x = 0;
    var y = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (x == 700 || y == 136 || transition == true) {
            clearInterval(id);
            
        } else {
            x += 5;
            y ++;
            elem.style.top = y + 'px';
            elem.style.right = x + 'px';
            setTimeout(time, 2000)
            
        }
    }
}
function time() {
    transition = true;
}

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
        setTimeout(time2, 2000)
        }
}
function time2() {
    transition = false;
}
