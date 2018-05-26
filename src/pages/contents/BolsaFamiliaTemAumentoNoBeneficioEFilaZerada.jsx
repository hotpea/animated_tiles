import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[banner]-2_anos_materia-52-01.jpg';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Bolsa família: aumento de 5,67% no benefício, fila zerada e mais brasileiros cadastrados</h2>

        <p className="simple-text">Com aumento anunciado de 5,67% para 2018, fila de espera zerada para entrar no programa desde o segundo semestre de 2017 e aumento no número de beneficiários, o Governo do Brasil garante continuidade e expande o Bolsa Família. Neste ano, são 14 milhões de famílias extremamente pobres, 160 mil a mais que o recorde de inscritos de 2014, que podem contar com o auxílio.</p>
        <p className="eye-text">Zerar a fila de espera para ter acesso ao programa foi uma grande conquista de toda a sociedade.</p>
        <p className="simple-text">Em maio de 2015, mais de 1,9 milhão de famílias chegaram a aguardar a inscrição. Agora, com o Cadastro Único, todos com perfil para participar do Bolsa Família e sem divergências estão sendo selecionados e ingressando no programa.</p>
        <p className="simple-text">Outro êxito alcançado foi o acompanhamento de saúde dos beneficiários do Bolsa Família, que apresentou o melhor desempenho no segundo semestre do ano passado desde 2006. A cobertura ultrapassou os 8,5 milhões, o que corresponde a 77,5% de crianças menores de sete anos e gestantes inscritas no programa.</p>
        <p className="smaller-title-text">Fonte: Ministério do Desenvolvimento Social</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)