import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[banner]-2_anos_materia-46-01.jpg';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Dois anos de gestão: mais de R$ 10 bilhões de economia para os brasileiros</h2>

        <p className="eye-text">Com ações inovadoras para diminuir a burocracia, gestão eficiente e combate à corrupção, o Governo do Brasil gerou economias de mais de R$ 10 bilhões, podendo reinvestir em serviços e programas para toda a população.</p>
        <p className="simple-text">Somente na área da saúde, entre maio de 2016 e dezembro de 2017, foram R$ 5 bilhões economizados com ações administrativas, negociação e revisão de contratos. O valor foi reinvestido completamente no Sistema Único de Saúde (SUS), servindo para habilitar novos serviços, custear unidades de Pronto Atendimento (UPAs) e o Serviço de Atendimento Móvel de Urgência (SAMU), assim como para credenciar novas equipes na atenção básica.</p>
        <h3>Pente-fino</h3>
        <p className="simple-text">As auditorias e fiscalizações do Ministério da Transparência também se destacam. A detecção dos casos de corrupção, o cancelamento de contratos e licitações desnecessários e a redução de custos representaram para os cofres públicos mais de R$ 4,6 bilhões de economia efetiva em 2017. </p>
        <p className="simple-text">Já com as operações de averiguação de fraudes no seguro desemprego, o Ministério do Trabalho pôde evitar, entre dezembro de 2016 e fevereiro de 2018, o gasto irregular de R$ 750 milhões. </p>
        <p className="simple-text">Os programas sociais também passaram por um pente-fino. Com gestão aperfeiçoada, o benefício está indo para quem realmente precisa e pagamentos indevidos foram suspensos. Somente no programa Bolsa Atleta, foram salvos R$ 13 milhões.</p>
        <p className="smaller-title-text">Fonte: Ministério da Transparência, Ministério do Trabalho, Ministério da Saúde</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)