import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[Info]-2_anos_materia-5.png';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Mais de 204 mil vagas com carteira assinada foram criadas em 2018</h2>

        <p className="simple-text">Depois de medidas do Governo do Brasil que ajudaram a organizar as contas públicas e a derrubar a inflação e os juros, o mercado de trabalho volta a apresentar números positivos em 2018. Nos primeiros três meses do ano, mais de 204 mil postos formais foram efetivados e o cenário de recuperação se consolida.</p>
        <p className="eye-text">Importante termômetro para a atividade econômica, a área de serviços obteve o principal resultado entre setores econômicos no mês de março. </p>
        <p className="simple-text">Nesse caso, foram abertos 57.384 novos empregos. A Indústria de Transformação foi o segundo setor com melhores resultados (+10.450 postos), com um acréscimo de 0,14% sobre fevereiro.</p>
        <p className="simple-text">Levantamento da Confederação Nacional da Indústria (CNI) mostra que o brasileiro está mais satisfeito com a vida e mais confiante na manutenção do próprio emprego. Em comparação com junho de 2016, momento quando o medo do desemprego foi mais forte, o indicador caiu 6,04%. A pesquisa cria uma pontuação e, no caso do desemprego, quanto mais ela cair, melhor.</p>
        <p className="smaller-title-text">Fonte: Ministério do Trabalho e CNI</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)