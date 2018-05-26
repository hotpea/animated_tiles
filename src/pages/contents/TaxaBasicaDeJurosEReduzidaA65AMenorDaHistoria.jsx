import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[Info]-2_anos_materia-4.png';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Taxa básica de juros é reduzida a 6,5%, a menor da história</h2>

        <p className="simple-text">A taxa básica de juros da economia, a Selic, atingiu o patamar de 6,5% em março, o menor percentual da história. Desde outubro de 2016, a redução do índice vem se repetindo regularmente. Usada como referência pelo sistema financeiro, uma taxa menor significa mais empregos, maior crescimento para o País e mais acesso ao crédito.</p>
        <p className="simple-text">Isso só foi possível depois de medidas adotadas pelo Governo do Brasil que criaram condições para taxas menores, como foi o caso do teto dos gastos, ajuste fiscal e outras ações coordenadas.</p>
        <p className="eye-text">Essas medidas contribuíram com o resultado e geraram mais confiança. Aliado a isso, uma inflação menor deu o espaço necessário para o Banco Central aplicar os cortes.</p>
        <p className="smaller-title-text">Fonte: IBGE</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)