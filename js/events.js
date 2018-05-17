$(document).ready(function() {
    $(document).on("click",".appDetails", function () {
        var clickedBtnID = $(this).attr('class'); // or var clickedBtnID = this.id
        alert(clickedBtnID);
    });

    Pace.on("done", function() {
        $('html').delay(1000).css('overflow-y', 'scroll');
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
    //window.wasScrolled = false;
    //$(window).bind('scroll',function(){
    //    if (!window.wasScrolled){
    //        $('html, body').animate({
    //            scrollTop: document.getElementById('container2').getBoundingClientRect().top
    //        },500);
    //    }
    //    window.wasScrolled = true;
    //});
});