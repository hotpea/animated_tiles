import React from 'react';
import HeaderContent from '../../components/HeaderContent';

import thumbnail from '../../assets/img/infos/[info] 2_anos_materia 17.jpg';

export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Após 20 anos de disputas, bancos e poupadores fecham acordo de R$ 12 bilhões</h2>

        <p className="simple-text">Com mediação da Advocacia-Geral da União (AGU), bancos e poupadores afetados por planos econômicos dos anos 1980 e 1990 estão mais próximos de encerrar as divergências. Acordo homologado pelo Supremo Tribunal Federal em fevereiro prevê o fim de cerca de 1 milhão de ações judiciais e deve injetar R$ 12 bilhões na economia.</p>
        <p className="eye-text">Para receber os valores, os clientes que têm processos precisarão abrir mão dessas disputas e aderir a um acordo que estará disponível em uma plataforma eletrônica ainda no primeiro semestre de 2018.</p>
        <p className="simple-text">A decisão termina com um impasse importante para o sistema financeiro e define regras claras para os pagamentos. Também contribui com a retomada do crescimento econômico por permitir que recursos que estavam parados nos bancos voltem a circular, gerando renda e consumo.</p>
        <p className="smaller-title-text">Fonte: Banco Central, Advocacia-Geral daUnião, Supremo Tribunal Federal</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)