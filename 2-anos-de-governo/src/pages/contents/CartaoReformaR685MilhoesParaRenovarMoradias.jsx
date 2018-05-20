import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[banner]-2_anos_materia-56-01.jpg';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Cartão Reforma: Governo do Brasil investe R$ 685,5 para auxiliar brasileiros a renovar suas casas</h2>

        <p className="simple-text">Em 2018, o Cartão Reforma irá beneficiar as famílias de todo o País com subsídio de até R$ 685,5 milhões.</p>
        <p className="eye-text">Com o incentivo, o Governo do Brasil proporciona melhores condições de moradia para as famílias de baixa renda e dá mais dignidade aos brasileiros.</p>
        <p className="simple-text">Poderão ser realizadas reformas, expansão ou conclusão dos lares em bairros selecionados pelas prefeituras. O intuito é que sejam feitas melhorias necessárias para que a habitação tenha mais conforto e segurança, podendo incluir esgotamento sanitário e banheiro exclusivo.</p>
        <p className="simple-text">As famílias cadastradas poderão receber de R$ 2 mil a R$ 9 mil para compra de materiais de construção em lojas credenciadas pelo programa. Dessa forma, elas ficarão responsáveis apenas pelos gastos com mão de obra e ferramentas.</p>
        <p className="smaller-title-text">Fonte: Ministério das Cidades, Cartão Reforma</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)