var Shuffle = window.Shuffle;

var todos_shuffle = document.getElementById("todos_shuffle");
var acreditar_shuffle = document.getElementById("acreditar_shuffle");
var dois_anos_shuffle = document.getElementById("dois_anos_shuffle");

var last_shuffle = Shuffle.ALL_ITEMS;

var original_width = '25%';
var original_height = '24vh';
var clicked_width = '100vw';
var clicked_height = '100vh';

var shuffleDivs = document.getElementsByClassName('shuffle-container')
var shuffleInstance = [];

for (var i = 0; i < shuffleDivs.length; i++) {
    var el = document.querySelector("#" + shuffleDivs[i].id);

    //var sizer = document.querySelector('.my-sizer-element');
    shuffleInstance[i] = new Shuffle(el,{
        itemSelector: '.picture-item',
        //sizer: sizer,
    });
}

// rolar pro topo ao carregar
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

window.addEventListener('resize', function(){
    resizeAll();
}, true);

document.body.onclick = function() {
    for (var i = 0; i < shuffleInstance.length; i++) {
        shuffleInstance[i].filter(last_shuffle);
    }
};

window.onload = function() {
    var topSite = document.getElementById('top-site-text');
    topSite.style.opacity = "1";
    topSite.style.top = "40%";

    mountEventsTiles();
};

//window.addEventListener('scroll',function(e) {
//    if(checkvisible(document.getElementById('video1'))) {
//        console.log('visible');
//
//        $('html, body').animate({
//            scrollTop: $('.js-section').offset().top
//        }, 200);
//    } else {
//        console.log('not visible');
//    }
//});

todos_shuffle.addEventListener('click', function() {
    resetButtons();

    todos_shuffle.className += ' button-active';
    last_shuffle = Shuffle.ALL_ITEMS;
    eventFire(document.body, 'click');
    resizeAll();
});

dois_anos_shuffle.addEventListener('click', function() {
    resetButtons();

    dois_anos_shuffle.className += ' button-active';
    last_shuffle = 'dois_anos';
    eventFire(document.body, 'click');
    resizeAll();
});

acreditar_shuffle.addEventListener('click', function() {
    resetButtons();

    acreditar_shuffle.className += ' button-active';
    last_shuffle = 'acreditar';
    eventFire(document.body, 'click');
    resizeAll();
});

function resetButtons() {
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('button-active');
    }
}

function mountEventsTiles() {
    var controler = document.getElementsByClassName('picture-item');

    for (var i = 0; i < controler.length; i++) {
        controler[i].onclick = function (e) {
            if(this.style.width == clicked_width) {
                resizeAll();

                var square = this;

                square.style.width = square.getAttribute('width');
                square.style.height = square.getAttribute('height');
                square.style.marginLeft = '0%';
                eventFire(document.body, 'click');

                square.getElementsByClassName('content')[0].style.opacity = "0";

                square.getElementsByClassName('type')[0].style.width = square.getElementsByClassName('type')[0].getAttribute('width');
                square.getElementsByClassName('type')[0].style.height = square.getElementsByClassName('type')[0].getAttribute('height');
                square.getElementsByClassName('type')[0].style.left = square.getElementsByClassName('type')[0].getAttribute('left');
                square.getElementsByClassName('type')[0].style.top = square.getElementsByClassName('type')[0].getAttribute('top');

                square.getElementsByClassName('type')[0].style.background = 'black';

                square.classList.remove('active');

                setTimeout(function(){
                    square.getElementsByClassName('float-title')[0].style.opacity = "1";
                }, 500);
            } else {
                resizeAll();

                var square = this;

                square.setAttribute('width', square.style.width);
                square.setAttribute('height', square.style.height);

                square.style.width = clicked_width;
                square.style.height = clicked_height;
                square.style.marginLeft = '-50%';
                square.style.position = 'fixed!important';
                eventFire(document.body, 'click');

                square.getElementsByClassName('float-title')[0].style.opacity = "0";

                setTimeout(function(){
                    square.getElementsByClassName('content')[0].style.opacity = "1";

                    square.getElementsByClassName('type')[0].setAttribute('width', square.getElementsByClassName('type')[0].style.width)
                    square.getElementsByClassName('type')[0].setAttribute('height', square.getElementsByClassName('type')[0].style.height)
                    square.getElementsByClassName('type')[0].setAttribute('left', square.getElementsByClassName('type')[0].style.left)
                    square.getElementsByClassName('type')[0].setAttribute('top', square.getElementsByClassName('type')[0].style.top)

                    square.getElementsByClassName('type')[0].style.width = '100%';
                    square.getElementsByClassName('type')[0].style.height = '100%';
                    square.getElementsByClassName('type')[0].style.left = '0%';
                    square.getElementsByClassName('type')[0].style.top = '0%';

                    square.getElementsByClassName('type')[0].style.background = 'white';

                    square.className += ' active';

                    setTimeout(function() {
                        window.scroll({
                            top: window.pageYOffset + square.getBoundingClientRect().top,
                            left: 0,
                            behavior: 'smooth'
                        });
                    }, 300);
                }, 500);
            }
        }
    }
}

function eventFire(el, etype){
    setTimeout(function(){
        if (el.fireEvent) {
            el.fireEvent('on' + etype);
        } else {
            var evObj = document.createEvent('Events');
            evObj.initEvent(etype, true, false);
            el.dispatchEvent(evObj);
        }
    },500);

}

function resizeAll() {
    var controler = document.getElementsByClassName('picture-item');

    for (i = 0; i < controler.length; i++) {
        var square = controler[i];

        if(square.hasAttribute('width')) {
            square.style.width = square.getAttribute('width');
        } else {
            square.setAttribute('width', square.style.width);
        }
        if(square.hasAttribute('height')) {
            square.style.height = square.getAttribute('height');
        } else {
            square.setAttribute('height', square.style.height);
        }

        window.square = square;

        if(square.getElementsByClassName('type').length > 0) {
            var type = square.getElementsByClassName('type')[0];

            if(type.hasAttribute('width')) {
                type.style.width = type.getAttribute('width');
            } else {
                type.setAttribute('width', type.style.width);
            }
            if(type.hasAttribute('height')) {
                type.style.height = type.getAttribute('height');
            } else {
                type.setAttribute('height', type.style.height);
            }
            if(type.hasAttribute('left')) {
                type.style.left = type.getAttribute('left');
            } else {
                type.setAttribute('left', type.style.left);
            }
            if(type.hasAttribute('top')) {
                type.style.top = type.getAttribute('top');
            } else {
                type.setAttribute('top', type.style.top);
            }
        }

        square.style.width = square.getAttribute('width');
        square.style.height = square.getAttribute('height');

        if(square.getElementsByClassName('float-title').length > 0) {
            square.getElementsByClassName('float-title')[0].style.opacity = "1";
            square.getElementsByClassName('content')[0].style.opacity = "0";

            square.getElementsByClassName('type')[0].style.background = 'black';
        }
    }
}


// check if visible
function posY(elm) {
    var test = elm, top = 0;

    while(!!test && test.tagName.toLowerCase() !== "body") {
        top += test.offsetTop;
        test = test.offsetParent;
    }

    return top;
}

function viewPortHeight() {
    var de = document.documentElement;

    if(!!window.innerWidth)
    { return window.innerHeight; }
    else if( de && !isNaN(de.clientHeight) )
    { return de.clientHeight; }

    return 0;
}

function scrollY() {
    if( window.pageYOffset ) { return window.pageYOffset; }
    return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
}

function checkvisible( elm ) {
    var vpH = viewPortHeight(), // Viewport Height
        st = scrollY(), // Scroll Top
        y = posY(elm);

    return !(y > (vpH + st));
}