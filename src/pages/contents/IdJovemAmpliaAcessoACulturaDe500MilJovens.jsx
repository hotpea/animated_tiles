import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[Banner]-2_anos_materia-86-01.jpg';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Programa ID Jovem conta com 500 mil cadastros e amplia acesso à cultura</h2>

        <p className="simple-text">Criado em 2016, o Programa Identidade Jovem (ID Jovem) já conta com mais de 500 mil cadastros efetivos, levando mais cultura aos brasileiros de 15 a 29 anos inscritos no Cadastro Único. </p>
        <p className="eye-text">Com o benefício, o Governo do Brasil assegura o acesso de milhões de jovens de baixa renda à cultura e à mobilidade urbana.</p>
        <p className="simple-text">Em 2018, a Secretaria Nacional da Juventude manterá um calendário de caravanas para divulgar o programa nos municípios e fortalecer a política de inclusão onde já houve atuação, além de uma ampla campanha de fiscalização do programa.</p>
        <p className="simple-text">O ID Jovem permite que jovens de baixa renda de até 29 anos tenham direito à meia-entrada em eventos culturais e gratuidade ou desconto no sistema de transporte coletivo interestadual. O cadastro pode ser feito on-line pelo site da Caixa ou por meio de aplicativo para smartphones.</p>
        <p className="smaller-title-text">Fonte: Secretaria Nacional da Juventude</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)