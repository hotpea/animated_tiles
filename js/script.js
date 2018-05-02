var Shuffle = window.Shuffle;

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



var todos_shuffle = document.getElementById("todos_shuffle");
var acreditar_shuffle = document.getElementById("acreditar_shuffle");
var dois_anos_shuffle = document.getElementById("dois_anos_shuffle");

var last_shuffle = Shuffle.ALL_ITEMS;

var original_width = '33%';
var clicked_width = '100%';

// rolar pro topo ao carregar
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

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

todos_shuffle.addEventListener('click', function() {
    last_shuffle = Shuffle.ALL_ITEMS;
    eventFire(document.body, 'click');
    resizeAll();
});

dois_anos_shuffle.addEventListener('click', function() {
    last_shuffle = 'dois_anos';
    eventFire(document.body, 'click');
    resizeAll();
});

acreditar_shuffle.addEventListener('click', function() {
    last_shuffle = 'acreditar';
    eventFire(document.body, 'click');
    resizeAll();
});

function mountEventsTiles() {
    var controler = document.getElementsByClassName('picture-item');

    for (var i = 0; i < controler.length; i++) {
        controler[i].onclick = function () {
            if(this.style.width == clicked_width) {
                resizeAll();

                var square = this;

                square.style.width = original_width;
                eventFire(document.body, 'click');

                square.getElementsByClassName('content')[0].style.opacity = "0";

                square.getElementsByClassName('type')[0].style.width = window.oldWidth;
                square.getElementsByClassName('type')[0].style.height = window.oldHeight;
                square.getElementsByClassName('type')[0].style.left = window.oldLeft;
                square.getElementsByClassName('type')[0].style.top = window.oldTop;

                setTimeout(function(){
                    square.getElementsByClassName('float-title')[0].style.opacity = "1";
                }, 500);
            } else {
                resizeAll();

                var square = this;

                square.style.width = clicked_width;
                square.style.position = 'fixed!important';
                eventFire(document.body, 'click');

                square.getElementsByClassName('float-title')[0].style.opacity = "0";

                setTimeout(function(){
                    square.getElementsByClassName('content')[0].style.opacity = "1";

                    window.oldWidth = square.getElementsByClassName('type')[0].style.width;
                    window.oldHeight = square.getElementsByClassName('type')[0].style.height;
                    window.oldLeft = square.getElementsByClassName('type')[0].style.left;
                    window.oldTop = square.getElementsByClassName('type')[0].style.top;

                    square.getElementsByClassName('type')[0].style.width = '100%';
                    square.getElementsByClassName('type')[0].style.height = '100%';
                    square.getElementsByClassName('type')[0].style.left = '0%';
                    square.getElementsByClassName('type')[0].style.top = '0%';

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

    for (var i = 0; i < controler.length; i++) {
        controler[i].style.width = original_width;

        if(controler[i].getElementsByClassName('float-title').length > 0) {
            controler[i].getElementsByClassName('float-title')[0].style.opacity = "1";
            controler[i].getElementsByClassName('content')[0].style.opacity = "0"
        }
    }
}
