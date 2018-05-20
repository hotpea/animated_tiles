import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[Info]-2_anos_materia-01.png';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Em 2017, Brasil tem menor inflação em duas décadas</h2>

        <p className="simple-text">Menor índice registrado em duas décadas, a inflação de 2,97% de dezembro passado é resultado direto das medidas econômicas apresentadas pelo Governo do Brasil. Mais qualidade de vida para a  população, geração de empregos, aumento do poder de compra dos brasileiros e mais rendimento na poupança.</p>
        <p className="eye-text">Uma economia mais forte beneficia, em especial, quem ganha menos.<br /> Em 2017, a inflação também foi a menor desde 1998 para as famílias de baixa renda.</p>
        <p className="simple-text">Pela primeira vez, o resultado ficou abaixo do piso da meta estabelecida pelo Governo, que era de 3%. Além das medidas do governo, a supersafra de grãos, que gerou redução no preço dos alimentos, também contribuiu para o índice histórico.</p>
        <p className="smaller-title-text">Fontes: Planalto e IBGE </p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)