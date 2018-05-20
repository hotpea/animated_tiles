import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[Info]-2_anos_materia-16.png';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Energia elétrica: Leilões de transmissão atraem bilhões em investimentos</h2>

        <p className="simple-text">Com a reorganização do setor elétrico, o ambiente de negócios ficou mais positivo e os investidores voltaram a investir em energia. Em 2017, foram leiloados 42 lotes de linhas de transmissão, com investimentos estimados em R$ 21,8 bilhões ao longo de todo o período de concessão, que é de 30 anos.</p>
        <p className="simple-text"> Esses certames, assim como outros do setor elétrico, foram marcados por grande concorrência – o primeiro com todos os 11 lotes arrematados; e o segundo, com lances em 31 dos 35 lotes ofertados. O desenvolvimento de todas essas linhas deve gerar cerca de 46 mil empregos diretos no Brasil.</p>
        <p className="simple-text">Nos dois leilões, os deságios superaram os 30% em ambos os casos, o que significa uma economia maior para o consumidor de energia no Brasil, aproximadamente R$ 39,7 milhões ao longo de 30 anos. Isso porque os leilões de transmissão são definidos pela empresa que oferecer o menor lance em relação ao valor da receita fixado pelo governo.</p>
        <p className="smaller-title-text">Fonte: Agora, é Avançar Parcerias e Aneel</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)