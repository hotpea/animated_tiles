import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[banner]-2_anos_materia-57-01.jpg';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Em 20 meses, 793 mil novas unidades do Minha Casa Minha Vida são contratadas</h2>

        <p className="simple-text">Com uma média de mais de 39 mil residências novas por mês, o Governo do Brasil ampliou o programa Minha Casa Minha Vida, retomando sonhos e dando impulso à construção civil. No total, foram 793 mil unidades contratadas, entre maio de 2016 e janeiro de 2018, ao valor de R$ 101 bilhões.</p>
        <p className="eye-text">Em 2018, não será diferente. Com um investimento total previsto de R$ 72,7 bilhões, mais 650 mil unidades habitacionais serão construídas. </p>
        <p className="simple-text">Parte da verba virá do Orçamento da União (R$ 9,7 bilhões), e o restante (R$ 63 bilhões), do Fundo de Garantia do Tempo de Serviço (FGTS).</p>
        <p className="smaller-title-text">Fonte: Ministério das Cidades</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)