$(document).ready(function() {
    $(document).on("click",".appDetails", function () {
        var clickedBtnID = $(this).attr('class'); // or var clickedBtnID = this.id
        alert(clickedBtnID);
    });

    Pace.on("done", function() {
        $('html').delay(1000).css('overflow-y', 'auto');
        $('.scroll').delay(500).css('opacity', '1');
    });

    /**
     * evento de play quando clicado em play do vídeo #1
     *
     * TODO: passar para PLAIN JAVASCRIPT
     */
    $('.play-button').click(function() {
        var play = $(this);

        $('html, body').animate({
            scrollTop: play.parent().offset().top
        }, 300);

        play.fadeOut();

        setTimeout(function() {
            play.parent().append('<iframe class="player" frameborder="0" src="https://www.youtube.com/embed/gPvptpONfYM?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1" allow="autoplay; encrypted-media"></iframe>');
        }, 400);
    });

    $('.play-button2').click(function() {
        var play = $(this);

        $('html, body').animate({
            scrollTop: play.parent().offset().top
        }, 300);

        play.fadeOut();

        setTimeout(function() {
            play.parent().append('<iframe class="player" frameborder="0" src="https://www.youtube.com/embed/kWjSRqR1BsY?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1" allow="autoplay; encrypted-media"></iframe>');
        }, 400);
    });

    $('.share').on('mouseover', function() {
        $('.top-menu.hide').css('opacity', 1);
    });

    $('.share').on('mouseout', function() {
        setTimeout(function() {
            $('.top-menu.hide').css('opacity', 0);
        },2500);
    });

    // TODO: Scroll to second-capa
    window.wasScrolled = false;
    $(window).bind('scroll',function(e){
        if( (window.innerHeight - bottom.getBoundingClientRect().bottom) >= 0 ) {
            //console.log(window.innerHeight - bottom.getBoundingClientRect().bottom);
            e.preventDefault();
        }

        if (!window.wasScrolled){
            $('html, body').animate({
                scrollTop: document.getElementById('container').getBoundingClientRect().top
            },500);
        }
        window.wasScrolled = true;
    });
});

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}