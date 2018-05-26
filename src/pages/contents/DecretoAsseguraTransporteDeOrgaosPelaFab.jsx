import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[banner]-2_anos_materia-37-01.jpg';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Com avião de prontidão, FAB assegura transporte de 476 órgãos para transplante</h2>

        <p className="simple-text">A assinatura de um decreto pelo presidente da República, Michel Temer, em junho de 2016 significou a chance de uma nova vida para centenas de pessoas após a Força Aérea Brasileira deixar uma aeronave de prontidão para o transporte de órgãos para transplantes. Nestes quase dois anos, foram 476 órgãos em suas aeronaves.</p>
        <p className="eye-text">Somente nos primeiros meses de 2018, foram 29 fígados, 25 corações, cinco pulmões, três rins e um pâncreas que chegaram a tempo para operações vitais.</p>
        <p className="simple-text">A Força Aérea é acionada quando não há voos comerciais para atender a uma emergência e garante, assim, que a doação chegue a tempo ao paciente que está à espera. </p>
        <p className="smaller-title-text">Fonte: Força Aérea Brasileira, Ministério da Saúde e Planalto</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)