import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[info]-2_anos_materia-38-01.jpg';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Brasil tem redução de 92% nos casos de zika e 83% nos casos de dengue em 2017</h2>

        <p className="simple-text">A grande mobilização do Governo do Brasil, com a participação de estados e municípios, teve resultados positivos: as três doenças transmitidas pelo Aedes agypti, dengue, zika e chicungunya, tiveram redução significativa em 2017.</p>
        <p className="eye-text">No caso da zika, a redução chegou a 92%, e a da dengue foi de 83%. Quanto à chikungunya, também houve baixa de 33% em relação a 2016.</p>
        <p className="simple-text">Medidas de combate ao mosquito e as campanhas de prevenção surtiram efeito e ajudaram na conscientização de que todos devem agir para evitar os focos do mosquito Aedes aegypti.</p>
        <p className="simple-text">Familiares dos bebês acometidos pela síndrome congênita do zika vírus e de microcefalia também puderam contar com mais Centros Especializados em Reabilitação (CERs) para a realização do tratamento. Entre maio de 2016 e fevereiro de 2018, 67 centros foram habilitados, representando um investimento de R$ 132 milhões por ano para custeio.</p>
        <p className="smaller-title-text">Fonte: Ministério da Saúde</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)