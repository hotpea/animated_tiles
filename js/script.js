var top_site = [
    {
        id: '.top-site-text',
        delayBefore: 100,
        animations: {
            top: '40%',
            opacity: 1
        }
    }
];

var trio_one = [
    {
        id: '#square_trio_first',
        animations: {marginTop: 0}
    },
    [
        {
            id: '#square_first_first',
            delayBefore: 100,
            animations: {
                left: '0px',
                top: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_first_second',
            delayBefore: 100,
            animations: {
                top: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_first_third',
            delayBefore: 100,
            animations: {
                right: '0px',
                top: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_second_first',
            delayBefore: 100,
            animations: {
                left: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_second_second',
            delayBefore: 100,
            animations: {
                opacity: 1
            }
        },
        {
            id: '#square_second_third',
            delayBefore: 100,
            animations: {
                top: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_second_four',
            delayBefore: 100,
            animations: {
                top: '0px',
                right: '0px',
                opacity: 1
            }
        }
    ]
];

var acreditar_animation = [
    {
        id: '.acreditar',
        delayBefore: 100,
        animations: {
            'max-width': '30%',
            opacity: 1
        }
    }
];

var trio_two = [
    {
        id: '#square_trio_third',
        animations: {marginTop: 0}
    },
    [
        {
            id: '#square_four_first',
            delayBefore: 100,
            animations: {
                left: '0px',
                top: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_four_second',
            delayBefore: 100,
            animations: {
                top: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_four_third',
            delayBefore: 100,
            animations: {
                right: '0px',
                top: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_third_first',
            delayBefore: 100,
            animations: {
                left: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_third_second',
            delayBefore: 100,
            animations: {
                opacity: 1
            }
        },
        {
            id: '#square_third_third',
            delayBefore: 100,
            animations: {
                top: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_third_four',
            delayBefore: 100,
            animations: {
                top: '0px',
                right: '0px',
                opacity: 1
            }
        }
    ]
];

var anos_animation = [
    {
        id: '.anos',
        delayBefore: 100,
        animations: {
            'max-width': '30%',
            opacity: 1
        }
    }
];

var trio_three = [
    {
        id: '#square_trio_five',
        animations: {marginTop: 0}
    },
    [
        {
            id: '#square_five_first',
            delayBefore: 100,
            animations: {
                left: '0px',
                top: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_five_second',
            delayBefore: 100,
            animations: {
                top: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_five_third',
            delayBefore: 100,
            animations: {
                right: '0px',
                top: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_six_first',
            delayBefore: 100,
            animations: {
                left: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_six_second',
            delayBefore: 100,
            animations: {
                opacity: 1
            }
        },
        {
            id: '#square_six_third',
            delayBefore: 100,
            animations: {
                top: '0px',
                opacity: 1
            }
        },
        {
            id: '#square_six_four',
            delayBefore: 100,
            animations: {
                top: '0px',
                right: '0px',
                opacity: 1
            }
        }
    ]
];

// inicia animações
var Shuffle = window.Shuffle;

var el = document.querySelector('#shuffle-container');
//var sizer = document.querySelector('.my-sizer-element');
var shuffleInstance = new Shuffle(el,{
    itemSelector: '.picture-item',
    //sizer: sizer,
});

var anos = document.getElementById("anos");
var acreditar = document.getElementById("acreditar");
var todos_shuffle = document.getElementById("todos_shuffle");
var acreditar_shuffle = document.getElementById("acreditar_shuffle");
var dois_anos_shuffle = document.getElementById("dois_anos_shuffle");

var last_shuffle = Shuffle.ALL_ITEMS;

var original_width = '33%';
var clicked_width = '100%';

new YAnimation(top_site, {loop: false, clearAfterEnd: false}).startAnimation();

//window.addEventListener('scroll',function(e) {
//    if(checkvisible(acreditar) && (!valida_one)) {
//        new YAnimation(trio_one, {loop: false, clearAfterEnd: false}).startAnimation();
//        valida_one = true;
//    }
//    if(checkvisible(anos) && (!valida_two)) {
//        new YAnimation(trio_two, {loop: false, clearAfterEnd: false}).startAnimation();
//        new YAnimation(acreditar_animation, {loop: false, clearAfterEnd: false}).startAnimation();
//        valida_two = true;
//    }
//    if(checkvisible(bottom) && (!valida_three)) {
//        new YAnimation(trio_three, {loop: false, clearAfterEnd: false}).startAnimation();
//        new YAnimation(anos_animation, {loop: false, clearAfterEnd: false}).startAnimation();
//        valida_three = true;
//    }
//});

// rolar pro topo ao carregar
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

document.body.onclick = function() {
    shuffleInstance.filter(last_shuffle);
};

window.onload = function() {
    var controler = document.getElementsByClassName('picture-item');

    for (var i = 0; i < controler.length; i++) {
        controler[i].onclick = function () {
            if(this.style.width == clicked_width) {
                resizeAll();

                var square = this;

                square.style.width = original_width;
                eventFire(document.body, 'click');

                square.getElementsByClassName('content')[0].style.opacity = "0";

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

                }, 500);
            }
        }
    }
};

todos_shuffle.addEventListener('click', function() {
    last_shuffle = Shuffle.ALL_ITEMS;
});

dois_anos_shuffle.addEventListener('click', function() {
    last_shuffle = 'dois_anos';
});

acreditar_shuffle.addEventListener('click', function() {
    last_shuffle = 'acreditar';
});

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
    }
}
