import React from 'react';
import HeaderContent from '../../components/HeaderContent';

import thumbnail from '../../assets/img/infos/[Banner]-2_anos_materia_20.jpg';

export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Agricultura familiar recebe crédito de R$ 30 bilhões para a safra 2017/2018</h2>

        <p className="simple-text">Na safra de 2017/2018, a agricultura familiar pode contar com um crédito de R$ 30 bilhões a uma taxa de juros mais baixa, entre 2,5% e 5,5%. </p>
        <p className="eye-text">Com os valores disponíveis, os pequenos agricultores podem investir em irrigação, armazenagem e práticas sustentáveis de manejo do solo e da água, além das tecnologias de energia renovável.</p>
        <p className="simple-text">São R$ 403 milhões a mais em crédito em relação à última safra. Os recursos, do Programa Nacional de Fortalecimento da Agricultura Familiar (Pronaf), fortalecem a produção de alimentos de forma sustentável. Anunciada pelo presidente da República, Michel Temer, durante lançamento do plano Safra, apoia os pequenos produtores e ajuda a combater a pobreza, estimulando o emprego e o desenvolvimento de regiões carentes.</p>
        <p className="smaller-title-text">Fonte: Secretaria Especial de Agricultura Familiar e do Desenvolvimento Agrário</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)