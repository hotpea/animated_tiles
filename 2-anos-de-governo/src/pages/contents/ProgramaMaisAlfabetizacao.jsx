import React from 'react';
import HeaderContent from '../../components/HeaderContent';
import thumbnail from '../../assets/img/infos/[Banner]-2_anos_materia_29.jpg';
export default () => (
    <div>
        <HeaderContent></HeaderContent>
        <h2 className="materia-title">Programa Mais Alfabetização terá investimento de R$ 523 milhões nos próximos dois anos</h2>

        <p className="simple-text">Lançado em 2018 pelo Governo do Brasil para favorecer o desenvolvimento dos níveis de leitura, escrita e matemática dos alunos matriculados nos dois primeiros anos do ensino fundamental, o Programa Mais Alfabetização terá investimento de R$ 523 milhões em 2018 e 2019.</p>
        <p className="eye-text">Com a iniciativa, o governo irá atender e melhorar a performance de 3,6 milhões de alunos em 156 mil turmas das 49 mil escolas de todo o País já cadastradas. </p>
        <p className="simple-text">Professores do programa terão apoio técnico de um assistente de alfabetização em cada turma. Esse profissional passará cinco ou 10 horas semanais em sala, dando suporte ao professor alfabetizador.</p>
        <p className="simple-text">O Mais Alfabetização faz parte da Política Nacional de Alfabetização, lançada pelo MEC em 2017, e corrobora com a Lei de Diretrizes e Bases da Educação Nacional (LDB), que determina o desenvolvimento da capacidade de aprender, tendo como meios básicos o pleno domínio da leitura, da escrita e do cálculo.</p>
        <p className="smaller-title-text">Fonte: Ministério da Educação</p>
        <p className="infos">
            <img alt="" src={thumbnail}/>
        </p>
    </div>
)