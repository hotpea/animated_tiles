import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[Banner]-2_anos_materia_19.jpg';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Brasil tem safra recorde de 238 milhões de toneladas de grãos e aumenta exportações em 2017</h2>

        <p className="simple-text">Em 2017, a safra recorde de 238 milhões de toneladas de grãos, especialmente de milho e de soja, ajudou a derrubar a inflação a patamares inéditos e contribuiu também para encerrar o período de recessão vivido no País. Foi a maior produção registrada na série histórica do Instituto Brasileiro de Geografia e Estatística (IBGE), iniciada em 1996</p>
        <p className="eye-text">Em 2018, a tendência de grandes colheitas deve se repetir e atingir 229,5 milhões de toneladas, sendo a segunda maior da história.</p>
        <p className="simple-text">Os números do campo também refletem nos resultados positivos da balança comercial do Brasil. As exportações do agronegócio representaram 44,1% do total, contribuindo para o saldo de US$ 67 bilhões na balança comercial.</p>
        <p className="smaller-title-text">Fontes: Conab,  IBGE e Mapa</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)