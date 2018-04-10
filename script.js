var animations = [
    // bloco de código exemplo do uso da biblioteca para animar
    //<<CONFIGURAÇÕES TEMPLATE>>
    //id: '#background', // seletor do elemento html
    //duration: 600, // duração da transição da propriedade 'animations' --> Esta propriedade é setada como padrão então foi omitida.
    //delayBefore: 600, // tempo para atraso da animação
    //delayAfter: 0, // tempo de aguardo para a o fim desta animação
    //animations: {marginTop: 100} // propriedades de animação, precisa inserir no CSS o valor inicial da propriedade inserida
    // para fazer efeitos de animações em simultâneo com vários elementos html, insira um array com hashes como no exemplo abaixo:

    {
        id: '#background',
        animations: {marginTop: 0}
    },
    [
        {
            id: '#blackFriday',
            delayBefore: 100,
            animations: {
                opacity: 1
            }
        },
        {
            id: '#pontilhadoTriangulo',
            delayBefore: 100,
            animations: {
                opacity: 1,
                left: '-275px',
                top: '-40px'
            }
        },
        {
            id: '#caixaGrande',
            delayBefore: 700,
            animations: {
                opacity: 1,
                top: '200px'
            }
        },
        //volta das animações
        {
            id: '#blackFriday',
            delayBefore: 3400,
            animations: {
                opacity: 0
            }
        },
        {
            id: '#pontilhadoTriangulo',
            delayBefore: 3400,
            animations: {
                opacity: 0,
                left: '-390px',
                top: '-138px'

            }
        },
        {
            id: '#caixaGrande',
            delayBefore: 3400,
            animations: {
                opacity: 0,
                top: '250px'
            }
        },
        //Segunda Animações.
        {
            id: '#pontilhadoTop',
            delayBefore: 4000,
            animations: {
                opacity: 1,
                left: '14px'
            }
        },
        {
            id: '#pontilhadoBottom',
            delayBefore: 4000,
            animations: {
                opacity: 1,
                left: '14px'
            }
        },
        {
            id: '#reducao90',
            delayBefore: 4200,
            animations: {
                opacity: 1,
                top: '84px'
            }
        },
        {
            id: '#aplicacaoInicial',
            delayBefore: 4600,
            animations: {
                opacity: 1,
                left: '15px'
            }
        },
        //{
        //    id: '#fundosInvestimento',
        //    delayBefore: 4800,
        //    animations: {
        //        opacity: 1,
        //        left: '15px'
        //    }
        //},
        //volta das animações
        {
            id: '#pontilhadoTop',
            delayBefore: 8000,
            animations: {
                opacity: 0,
                left: '-275px'
            }
        },
        {
            id: '#pontilhadoBottom',
            delayBefore: 8000,
            animations: {
                opacity: 0,
                left: '-275px'
            }
        },
        {
            id: '#reducao90',
            delayBefore: 8000,
            animations: {
                opacity: 0,
                top: '110px'
            }
        },
        {
            id: '#aplicacaoInicial',
            delayBefore: 8000,
            animations: {
                opacity: 0,
                top: '139px'
            }
        },
        //{
        //    id: '#fundosInvestimento',
        //    delayBefore: 8000,
        //    animations: {
        //        opacity: 0,
        //        top: '156px'
        //    }
        //},
        //Terceira Animações.
        {
            id: '#layer17',
            delayBefore: 8600,
            animations: {
                opacity: 1,
                top: '94px'
            }
        },
        {
            id: '#a',
            delayBefore: 8900,
            animations: {
                opacity: 1,
                top: '110px'
            }
        },
        {
            id: '#layer27',
            delayBefore: 9200,
            animations: {
                opacity: 1,
                top: '92px'
            }
        },
        {
            id: '#novembro',
            delayBefore: 9500,
            animations: {
                opacity: 1,
                top: '154px'
            }
        },
        //volta das animações
        {
            id: '#layer17',
            delayBefore: 12000,
            animations: {
                opacity: 0,
                top: '120px'
            }
        },
        {
            id: '#a',
            delayBefore: 12000,
            animations: {
                opacity: 0,
                top: '136px'
            }
        },
        {
            id: '#layer27',
            delayBefore: 12000,
            animations: {
                opacity: 0,
                top: '120px'
            }
        },
        {
            id: '#novembro',
            delayBefore: 12000,
            animations: {
                opacity: 0
            }
        },
        //Quarta Animações.12600
        {
            id: '#trianguloAzul',
            delayBefore: 12600,
            animations: {
                opacity: 1,
                left: '197px'
            }
        },
        {
            id: '#caixaPequena',
            delayBefore: 12800,
            animations: {
                opacity: 1,
                left: '195px'
            }
        },
        {
            id: '#comCaixa',
            delayBefore: 13000,
            animations: {
                opacity: 1
            }
        },
        {
            id: '#saibaMais',
            delayBefore: 13300,
            animations: {
                opacity: 1,
                top: '142px'
            }
        },
        {
            id: '#botaoAmarelo',
            delayBefore: 13300,
            animations: {
                opacity: 1,
                top: '135px'
            }
        },
        {
            id: '#condicaoValida',
            delayBefore: 13600,
            animations: {
                opacity: 1
            }
        },
        //volta das animações
        {
            id: '#trianguloAzul',
            delayBefore: 18000,
            animations: {
                opacity: 0,
                left: '277px'
            }
        },
        {
            id: '#caixaPequena',
            delayBefore: 18000,
            animations: {
                opacity: 0,
                left: '245px'
            }
        },
        {
            id: '#comCaixa',
            delayBefore: 18000,
            animations: {
                opacity: 0
            }
        },
        {
            id: '#saibaMais',
            delayBefore: 18000,
            animations: {
                opacity: 0,
                top: '162px'
            }
        },
        {
            id: '#botaoAmarelo',
            delayBefore: 18000,
            animations: {
                opacity: 0,
                top: '155px'
            }
        },
        {
            id: '#condicaoValida',
            delayBefore: 18000,
            animations: {
                opacity: 0
            }
        }
    ]
];

new YAnimation(animations, {loop: true, clearAfterEnd: false}).startAnimation();