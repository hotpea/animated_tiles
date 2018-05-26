import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[Info]-2_anos_materia-8.png';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Saques do PIS/Pasep beneficiam 11,2 milhões de trabalhadores; impacto chega a R$ 21,4 bi</h2>

        <p className="simple-text">Ao reduzir a idade mínima para o saque das contas dos programas de Integração Social (PIS) e de Formação do Patrimônio do Servidor Público (Pasep), o Governo do Brasil apresenta mais uma medida para estimular a economia do País. São 11,2 milhões de trabalhadores, com mais de 60 anos de idade, com direito à retirada dos valores que pode injetar até R$ 21,4 bilhões na economia.</p>
        <p className="simple-text">Em agosto de 2017, a idade de saque de 70 anos foi alterada para 65 anos para homens e 62 anos para mulheres. Com a intenção de manter o estímulo e ampliar o número de beneficiários, o governo editou em dezembro uma nova medida provisória – dessa vez, reduzindo a idade para 60 anos para todos os beneficiários. Aposentados, herdeiros, quem foi transferido para a reserva remunerada ou reforma ou casos de invalidez também estão contemplados.</p>
        <p className="simple-text">Os fundos PIS/Pasep vigoraram entre 1971 e 1988, ano em que foram incorporados ao Fundo de Apoio ao trabalhador (FAT). Com a mudança, muitos trabalhadores que tinham o direito não sacaram a totalidade de seus saldos.</p>
        <p className="eye-text">Com essas medidas, o Governo do Brasil possibilita que o dinheiro retorne às mãos dos brasileiros e amplia o poder de compra da população.</p>
        <p className="smaller-title-text">Fonte: Caixa Econômica Federal e Ministério do Planejamento</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)