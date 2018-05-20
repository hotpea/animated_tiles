import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[Info]-2_anos_materia-9.png';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Saldo da balança comercial em 2017 bate recorde: saldo de US$ 67 bilhões</h2>

        <p className="simple-text">Em 2017, as exportações brasileiras superaram as importações em US$ 67 bilhões, um saldo histórico para o País. Os dados também revelam o primeiro crescimento das exportações do Brasil em cinco anos e das importações em três.</p>
        <p className="eye-text">Se comparado com o ano anterior, o resultado é ainda mais expressivo: 40,5% superior ao alcançado em 2016 (US$ 47,683 bilhões).</p>
        <p className="simple-text">Produtos como minério de ferro, soja e petróleo bruto foram destaques pelo crescimento no volume ou valor exportado. Em 2018, dados do primeiro trimestre mostram continuidade no crescimento, com saldo comercial positivo de US$ 13,9 bilhões. A expectativa do governo é que este seja o segundo ano consecutivo de crescimento do comércio.</p>
        <p className="smaller-title-text">Fonte: Ministério da Industria, Comércio Exterior e Serviços</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)