import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[Info]-2_anos_materia-2.png';
export default () => (
    <div>
        <HeaderContent></HeaderContent>

        <h2 className="materia-title">PIB de 1% e tomada do crescimento após a maior recessão em 20 anos</h2>

        <p className="simple-text">Puxado principalmente pela agropecuária, que cresceu 13% em 2017, o Produto Interno Bruto (PIB) do Brasil cresceu 1% em 2017, depois de ficar negativo por dois anos consecutivos. A recuperação foi possível graças às medidas apresentadas pelo governo, que permitiram a redução dos juros e controle da inflação.</p>
        <p className="eye-text">Junto à agropecuária, bons resultados foram observados no setor de serviços (+0,3%) e na taxa de investimentos, que ficou em 15,6% em 2017. Já o consumo das famílias cresceu 1%. No total, o PIB do Brasil somou R$ 6,6 trilhões.</p>
        <p className="simple-text">O Produto Interno Bruto (PIB) é a soma de todos os bens e serviços produzidos no País. Esse número é usado para mostrar o quanto se produziu e o desempenho das atividades econômicas durante um determinado período de tempo.</p>
        <p className="smaller-title-text">Fonte: IBGE</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)