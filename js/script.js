// rolar pro topo ao carregar
//window.onbeforeunload = function () {
//    window.scrollTo(0, 0);
//};

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
var acreditar = document.getElementById("acreditar");
var anos = document.getElementById("anos");
var bottom = document.getElementById("bottom");

window.addEventListener('scroll',function(e) {
    if(checkvisible(acreditar)) {
        new YAnimation(trio_one, {loop: false, clearAfterEnd: false}).startAnimation();
    }
    if(checkvisible(anos)) {
        new YAnimation(trio_two, {loop: false, clearAfterEnd: false}).startAnimation();
    }
    if(checkvisible(bottom)) {
        new YAnimation(trio_three, {loop: false, clearAfterEnd: false}).startAnimation();
    }
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
