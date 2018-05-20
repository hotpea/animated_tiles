import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Em2017BrasilTemMenorInflacaoEmDuasDecadas from './contents/Em2017BrasilTemMenorInflacaoEmDuasDecadas';
import GovernoPropoeSalarioMinimoDe1002Para2019 from './contents/GovernoPropoeSalarioMinimoDe1002Para2019';
import PIBDe1ETomadaDoCrescimentoAposAMaiorRecessaoEm20Anos from './contents/PIBDe1ETomadaDoCrescimentoAposAMaiorRecessaoEm20Anos';
import ModernizacaoTrabalhistaNovosContratosEsquentamOMercadoDeTrabalho from './contents/ModernizacaoTrabalhistaNovosContratosEsquentamOMercadoDeTrabalho';
import DepoimentoPresidenteDaCaixa from './contents/DepoimentoPresidenteDaCaixa';
import MaisDe204MilVagasComCarteiraAssinadaForamCriadasEm2018 from './contents/MaisDe204MilVagasComCarteiraAssinadaForamCriadasEm2018';
import TaxaBasicaDeJurosEReduzidaA65AMenorDaHistoria from './contents/TaxaBasicaDeJurosEReduzidaA65AMenorDaHistoria';
import ComLeiDeGovernanca from './contents/ComLeiDeGovernanca';
import SaquesDasContasInativas from './contents/SaquesDasContasInativas';
import SaquesDoPispasepBeneficiam from './contents/SaquesDoPispasepBeneficiam';
import FiesTera350Mil from './contents/FiesTera350Mil';
import AgriculturaFamiliarRecebe from './contents/AgriculturaFamiliarRecebe';
import BrasilTemRecordeDeProducao from './contents/BrasilTemRecordeDeProducao';
import BrasilEOSegundoProdutor from './contents/BrasilEOSegundoProdutor';
import RecordeDeBolsasOfertas from './contents/RecordeDeBolsasOfertas';
import DiscutidoHaMaisDe20Anos from './contents/DiscutidoHaMaisDe20Anos';
import LeiloesDeEnergiaAtraemBilhoes from './contents/LeiloesDeEnergiaAtraemBilhoes';
import ProgramaMaisAlfabetizacao from './contents/ProgramaMaisAlfabetizacao';
import SaldoDaBalancaComercial from './contents/SaldoDaBalancaComercial';
import BrasilTemSafraRecorde from './contents/BrasilTemSafraRecorde';
import SAMU192Tem65DaSuaFrotaRenovadaEmDoisAnos from './contents/SAMU192Tem65DaSuaFrotaRenovadaEmDoisAnos';
import NumeroDeConsultasNasUbs from './contents/NumeroDeConsultasNasUbs';
import CasosDeDengueZikaEChicungunyaSaoReduzidos from './contents/CasosDeDengueZikaEChicungunyaSaoReduzidos';
import CoberturaDosPlanosDeSaudeEAmpliada from './contents/CoberturaDosPlanosDeSaudeEAmpliada';
import DecretoAsseguraTransporteDeOrgaosPelaFab from './contents/DecretoAsseguraTransporteDeOrgaosPelaFab';
import CompraDeMedicamentosTemReforcoDeR80Milhoes from './contents/CompraDeMedicamentosTemReforcoDeR80Milhoes';
import CartaoReformaR685MilhoesParaRenovarMoradias from './contents/CartaoReformaR685MilhoesParaRenovarMoradias';
import GestaoEficienteGeraEconomiaParaAPopulacao from './contents/GestaoEficienteGeraEconomiaParaAPopulacao';
import TetoDosGastos from './contents/TetoDosGastos';
import BolsaFamiliaTemAumentoNoBeneficioEFilaZerada from './contents/BolsaFamiliaTemAumentoNoBeneficioEFilaZerada';
import MinhaCasaMinhaVida793MilUnidadesEm20Meses from './contents/MinhaCasaMinhaVida793MilUnidadesEm20Meses';
import RecordeNaEmissaoDeTitulosDePropriedadeEm2017 from './contents/RecordeNaEmissaoDeTitulosDePropriedadeEm2017';
import EntregaRecordeDeTitulosDaReformaAgraria from './contents/EntregaRecordeDeTitulosDaReformaAgraria';
import RioMaisSeguroComIntervencaoFederal from './contents/RioMaisSeguroComIntervencaoFederal';
import GovernoReforcaOperacoesNaFaixaDeFronteira from './contents/GovernoReforcaOperacoesNaFaixaDeFronteira';
import QuaseDuasFrancasDeUnidadesDeConservacaoCriadas from './contents/QuaseDuasFrancasDeUnidadesDeConservacaoCriadas';
import IdJovemAmpliaAcessoACulturaDe500MilJovens from './contents/IdJovemAmpliaAcessoACulturaDe500MilJovens';
import IntegracaoDoSaoFranciscoMaisVidaNoNordeste from './contents/IntegracaoDoSaoFranciscoMaisVidaNoNordeste';

import MultasAmbientaisViramInvestimento from './contents/MultasAmbientaisViramInvestimento';
import PfBateRecordeHistoricoDeApreensaoDeDrogas from './contents/PfBateRecordeHistoricoDeApreensaoDeDrogas';

import afogado from '../assets/videos/AFOGADO.mp4';

import vertical from '../assets/img/vertical.png';

import logoBranco from '../assets/img/logo-branco.png';
import logoBranco2 from '../assets/img/logo-branco@2x.png';
import logoBranco3 from '../assets/img/logo-branco@3x.png';

import sharePreto from '../assets/img/share-preto.png';
import sharePreto2 from '../assets/img/share-preto@2x.png';
import sharePreto3 from '../assets/img/share-preto@3x.png';

import icFacebook from '../assets/img/ic-facebook.png';
import icFacebook2 from '../assets/img/ic-facebook@2x.png';
import icFacebook3 from '../assets/img/ic-facebook@3x.png';

import icTwitter from '../assets/img/ic-twitter.png';
import icTwitter2 from '../assets/img/ic-twitter@2x.png';
import icTwitter3 from '../assets/img/ic-twitter@3x.png';

import logoColor from '../assets/img/logo-color.png';
import logoColor2 from '../assets/img/logo-color@2x.png';
import logoColor3 from '../assets/img/logo-color@3x.png';

import logoRodape from '../assets/img/logo-rodape.png';
import logoRodape2 from '../assets/img/logo-rodape@2x.png';
import logoRodape3 from '../assets/img/logo-rodape@3x.png';

/* 
import  from '../assets/img/.png';
import  from '../assets/img/@2x.png';
import  from '../assets/img/@3x.png';
 */


class Home extends Component {
    // constructor(props) {
    //     super(props);

    // }
    componentDidMount() {
        window.initScript();
    }
    render() {
        return (
            <div className="base">
                <div id="fullpage">
                    <div id="container2" className="container-white wrapper">
                        <div className="videoloop">
                            <header className="topo-logo">
                                <div className="topo-marca">
                                    <img alt="" src={logoBranco} srcSet={`${logoBranco2} 2x, ${logoBranco3} 3x`} className="gov-br "/>
                                </div>

                                <div className="topo-links">
                                    <a href="documentos/balanco.pdf" target="_blank">Balanço de Governo</a>
                                </div>

                                <div className="topo-share">
                                    <img alt="" src={sharePreto} srcSet={`${sharePreto2} 2x, ${sharePreto3} 3x`} className="logo share-top share" />

                                    <div className=" topo-icons">
                                        <div className="top-menu facebook hide facebook-share-top">
                                            <br/>
                                            <img alt="" src={icFacebook} srcSet={`${icFacebook2} 2x, ${icFacebook3} 3x`} className="logo share facebook-icon" />
                                        </div>

                                        <br/>

                                        <div className="top-menu twitter hide twitter-share-top">
                                            <img alt="" src={icTwitter} srcSet={`${icTwitter2} 2x, ${icTwitter3} 3x`} className="logo share twitter-icon" />
                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </header>
                        </div>

                        <video autoPlay muted loop id="myVideo">
                                <source id="video-source" src={afogado} type="video/mp4" />
                        </video>
                        <div id="slideshow">
                            <h4 className="slideshow-element">Saímos da recessão</h4>
                            <h4 className="slideshow-element">O Brasil voltou a respirar</h4>
                            <h4 className="slideshow-element">No fundo, você sabe que melhorou</h4>
                        </div>
                        <div id="scroll-first" className="scroll-first scroll">
                            <div>
                                <img alt="" className="vertical hide" src={vertical}/>
                            </div>
                                <div className="icon-scroll">
                                </div>

                                <br/>

                            <span className="smaller-title-text">
                                ROLE PARA BAIXO
                            </span>
                        </div>
                    </div>

                    <div id="site-content">
                        <div id="container" className="wrapper container collapsed">
                            <div id="top-site-text" className="top-site-text capa-paroller">
                                <div>
                                    <div className="top-menu">
                                        <header className="topo-logo">
                                            <div className="topo-marca">
                                                <img alt="" src={logoColor} srcSet={`${logoColor2} 2x, ${logoColor3} 3x`} className="gov-br" />
                                            </div>

                                            <div className="topo-links">
                                                <a href="documentos/balanco.pdf" target="_blank" style={{color: 'black'}}>Balanço de Governo</a>
                                            </div>

                                            <div className="topo-share">
                                                <img alt="" src={sharePreto} srcSet={`${sharePreto2} 2x, ${sharePreto3} 3x`} className="share-top share" />
                                                <div className="topo-icons">

                                                    <div className="top-menu facebook hide facebook-share-top">
                                                        <br/>
                                                        <img alt="" src={icFacebook} srcSet={`${icFacebook2} 2x, ${icFacebook3} 3x`} className="share facebook-icon" />
                                                    </div>

                                                    <br/>

                                                    <div className="top-menu twitter hide twitter-share-top">
                                                        <img alt="" src={icTwitter} srcSet={`${icTwitter2} 2x, ${icTwitter3} 3x`} className="share twitter-icon" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br/>
                                        </header>
                                    </div>
                                </div>
                            </div>

                            <br/>

                            <div>
                                <span className="bigger-title-text"> Avançamos.</span>
                            </div>

                            <br/><br/>

                            <div>
                                <img alt="" src={vertical} className="vertical hide"/>
                            </div>

                            <br/>

                            <div id="scroll-to-page" className="scroll">
                                <div>
                                    <img alt="" src={vertical} className="vertical hide"/>
                                </div>
                                <div className="icon-scroll scroll-margin logo">
                                </div>

                                <br/>

                                <span className="smaller-title-text">
                                    ROLE PARA BAIXO
                                </span>
                            </div>
                        </div>

                        <div className="container navigation">
                            <button id="todos" className="button button-active" shuffle="Todos">Todos</button>
                            <button id="economia" className="button" shuffle="economia">Economia</button>
                            <button id="meio-ambiente" className="button" shuffle="meio-ambiente">Meio Ambiente</button>
                            <button id="cultura" className="button" shuffle="cultura">Cultura</button>
                            <button id="gestao" className="button" shuffle="gestao">Gestão</button>
                            <button id="social" className="button" shuffle="social">Social</button>
                            <button id="seguranca-e-defesa" className="button" shuffle="seguranca-e-defesa">Seguranca e Defesa</button>
                        </div>

                        <div id="shuffle-container" className="shuffle-container">

                            {/* 1 - Matéria 1 Economia */}

                            <div id="em-2017-brasil-tem-menor-inflacao-em-duas-decadas" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-one">
                                        Inflação de 2,95% em 2017 é a <strong>menor</strong> em 20 anos
                                    </div>

                                    <div className="thumb">
                                        <img alt="" src="../assets/../assets/img/thumb/01-inflacao.png" />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}em-2017-brasil-tem-menor-inflacao-em-duas-decadas`} component={Em2017BrasilTemMenorInflacaoEmDuasDecadas} />
                                    </div>
                                </div>
                            </div>

                            {/* 2-Matéria 4 Economia */}

                            <div id="governo-propoe-salario-minimo-de-1002-para-2019" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-two">
                                        <strong>salário mínimo de R$ 1.002 para 2019</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/02-salario-minimo.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-propoe-salario-minimo-de-1002-para-2019`} component={GovernoPropoeSalarioMinimoDe1002Para2019} />
                                    </div>
                                </div>
                            </div>

                            {/* 3 - Matéria 2 Economia */}

                            <div id="PIB-de-1-e-tomada-do-crescimento-apos-a-maior-recessao-em-20-anos" className="picture-item square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_eight_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>País volta a crescer</strong> após dois anos de recessão
                                    </div>

                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/03-pais-volta-crescer.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}PIB-de-1-e-tomada-do-crescimento-apos-a-maior-recessao-em-20-anos`} component={PIBDe1ETomadaDoCrescimentoAposAMaiorRecessaoEm20Anos} />
                                    </div>
                                </div>
                            </div>

                            {/* 4 - Matéria 6 Economia */}

                            <div id="modernizacao-trabalhista-novos-contratos-esquentam-o-mercado-de-trabalho" className="picture-item grayscale square-two-rows" tabIndex="0" data-groups='["energia"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-two">
                                        Nova lei trabalhista <strong>beneficia criação de empregos</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/04-nova-lei-trabalhista.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}modernizacao-trabalhista-novos-contratos-esquentam-o-mercado-de-trabalho`} component={ModernizacaoTrabalhistaNovosContratosEsquentamOMercadoDeTrabalho} />
                                    </div>
                                </div>
                            </div>


                            {/* 5 - video 1 */}
                            <div id="depoimento-presidente-da-caixa" className="picture-item grayscale square-two-rows-and-columns" tabIndex="0" data-groups='["todos"]'>
                                <div className="type_three type">
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/05-video-entrevista1.png')}/>
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={DepoimentoPresidenteDaCaixa} />
                                    </div>
                                </div>
                            </div>


                            {/* 6 - Matéria 5 Economia */}

                            <div id="mais-de-204-mil-vagas-com-carteira-assinada-foram-criadas-em-2018" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-one">
                                        Postos de trabalho <strong>voltam a crescer</strong> em 2018
                                    </div>

                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/06-postos-de-trabalho.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={MaisDe204MilVagasComCarteiraAssinadaForamCriadasEm2018} />
                                    </div>
                                </div>
                            </div>



                            {/* 8 - Matéria 3 Economia */}

                            <div id="taxa-basica-de-juros-e-reduzida-a-65-a-menor-da-historia" className="picture-item square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-one">
                                        Taxa de juros atinge 6,5%, <strong>a menor da história</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/08-taxa-de-juros-menor.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={TaxaBasicaDeJurosEReduzidaA65AMenorDaHistoria} />
                                    </div>
                                </div>
                            </div>

                            {/* 7 - Matéria 10 Economia */}

                            <div id="com-lei-de-governanca" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Estatais têm lucro de <strong>R$ 28,4 bilhões em 2017</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/07-estatais-lucro.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={ComLeiDeGovernanca} />
                                    </div>
                                </div>
                            </div>
                            {/* 9 - Matéria 7 Economia */}

                            <div id="saques-das-contas-inativas" className="picture-item square-two-columns" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Saques de contas do FGTS somam <strong>R$ 44 bilhões</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/09-saque-fgts.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={SaquesDasContasInativas} />
                                    </div>
                                </div>
                            </div>


                            {/* 10-Matéria 8 Economia */}

                            <div id="saques-do-pispasep-beneficiam" className="picture-item grayscale square-two-columns" tabIndex="0" data-groups='["energia"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Saques do PIS/Pasep injetam até R$ <strong>21 bi na economia</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/10-saque-pis.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={SaquesDoPispasepBeneficiam} />
                                    </div>
                                </div>
                            </div>

                            {/* PRIMEIRA METADE DA LEVA */}
                            {/* <div id="video-afogados" className="picture-item grayscale alternate center" data-groups='["todos"]'> */}
                            {/* <img id="video" className="play-button play" src={require('')} src="../assets/img/thumb/afogados_thumb.jpg"> */}
                            {/* </div> */}

                            {/* 11 - Matéria 26 Educação */}

                            <div id="fies-tera-350-mil" className="picture-item square-two-columns" tabIndex="0" data-groups='["energia"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Fies abre 100 mil vagas a <strong>juro zero em 2018</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/11-fies-vagas.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={FiesTera350Mil} />
                                    </div>
                                </div>
                            </div>

                            {/* 12 Matéria 20 Agro */}

                            <div id="agricultura-familiar-recebe" className="picture-item square-two-columns" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Agricultura familiar recebe crédito de <strong>R$ 30 bilhões</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/12-agricultura-familiar.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={AgriculturaFamiliarRecebe} />
                                    </div>
                                </div>
                            </div>


                            {/* 13 - Matéria 15 Energia */}

                            <div id="brasil-tem-recorde-de-producao" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Petróleo : <strong>Brasil bate recorde</strong> de produção em 2017
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/13-petroleo-recorde.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={BrasilTemRecordeDeProducao} />
                                    </div>
                                </div>
                            </div>

                            {/* 14 - Matéria 18 Energia */}

                            <div id="brasil-e-o-segundo-produtor" className="picture-item grayscale square" tabIndex="0" data-groups='["energia"]'>
                                <div className="type_two type">
                                    <div className="float-title float-title-two">
                                        Brasil é o <strong>segundo produtor mundial</strong> de biodiesel
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/14-biodiesel.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={BrasilEOSegundoProdutor} />
                                    </div>
                                </div>
                            </div>

                            {/* 15-Matéria 27 Educação */}

                            <div id="recorde-de-bolsas-ofertas" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_eight type">
                                    <div className="float-title float-title-one">
                                        ProUni cresce 10% e tem <strong>recorde de bolsas</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/15-prouni-recorde.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={RecordeDeBolsasOfertas} />
                                    </div>
                                </div>
                            </div>


                            {/* 17-Matéria 24 Educação */}

                            <div id="discutido-ha-mais-de-20-anos" className="picture-item square-two-rows" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title float-title-one">
                                        Novo Ensino Médio: <strong>educação do Brasil no século 21</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/17-novo-ensino-medio.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={DiscutidoHaMaisDe20Anos} />
                                    </div>
                                </div>
                            </div>

                            {/* 18 - Matéria 16 energia */}

                            <div id="leiloes-de-energia-atraem-bilhoes" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["energia"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-three">
                                        Leilões de energia atraem <strong>bilhões em investimentos</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/18-leiloes.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={LeiloesDeEnergiaAtraemBilhoes} />
                                    </div>
                                </div>
                            </div>


                            {/* 16 Matéria 29 Educação */}

                            <div id="programa-mais-alfabetizacao" className="picture-item grayscale square" tabIndex="0" data-groups='["educacao"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-one">
                                        R$ 523 milhões para o <strong>Programa Mais Alfabetização</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/16-alfabetizacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={ProgramaMaisAlfabetizacao} />
                                    </div>
                                </div>
                            </div>
                            {/* 20- Matéria 9 Economia */}

                            <div id="saldo-da-balanca-comercial" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-four">
                                        Balança comercial tem <strong>recorde histórico em 2017</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/20-balanca-comercial.png')}/>
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={SaldoDaBalancaComercial} />
                                    </div>
                                </div>
                            </div>



                            {/* 19- Matéria 19 Agro */}

                            <div id="brasil-tem-safra-recorde" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Brasil tem <strong>safras recordes</strong> e mais exportação
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/19-brasil-exportacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={BrasilTemSafraRecorde} />
                                    </div>
                                </div>
                            </div>

                            {/* <div className="picture-item grayscale alternate" data-groups='["todos"]'> */}
                            {/* <img alt="" className="play-button play" src={require('')} src="../assets/img/thumb/video02.jpg"/> */}
                            {/* </div> */}

                            {/* FIM PRIMEIRA LEVA  */}

                            {/* INICIO SEGUNDA LEVA */}

                            {/* 21-Matéria 36 saude */}

                            <div id="SAMU-192-tem-65-da-sua-frota-renovada-em-dois-anos" className="picture-item square-two-columns" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        <strong>SAMU 192</strong> tem 65% da sua frota renovada em dois anos
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/21-samu.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={SAMU192Tem65DaSuaFrotaRenovadaEmDoisAnos} />
                                    </div>
                                </div>
                            </div>

                            {/* 22 Matéria 33 saude */}
                            <div id="numero-de-consultas-nas-ubs" className="picture-item grayscale square-two-columns" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        UBS:  <strong>gestão eficiente</strong> leva saúde para quem precisa
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/22-ubs-gestao-eficiente.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={NumeroDeConsultasNasUbs} />
                                    </div>
                                </div>
                            </div>


                            {/* 23-Matéria 38 saude */}

                            <div id="casos-de-dengue-zika-e-chicungunya-sao-reduzidos" className="picture-item grayscale square" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-three">
                                        Casos de dengue, zika e chicungunya <strong>são reduzidos</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/23-casos-dengue.png')}/>
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={CasosDeDengueZikaEChicungunyaSaoReduzidos} />
                                    </div>
                                </div>
                            </div>

                            {/* 24-Matéria 42 saude */}

                            <div id="cobertura-dos-planos-de-saude-e-ampliada" className="picture-item grayscale square" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-three">
                                        Cobertura dos planos de saúde <strong>é ampliada</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/24-cobertura-planos-de-saude.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={CoberturaDosPlanosDeSaudeEAmpliada} />
                                    </div>
                                </div>
                            </div>

                            {/* 25-Matéria 37 saude */}

                            <div id="decreto-assegura-transporte-de-orgaos-pela-fab" className="picture-item square" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_eigth-alt type">
                                    <div className="float-title-alt float-title-three">
                                        Decreto assegura <strong>transporte de órgãos pela FAB</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/25-transporte-fab.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={DecretoAsseguraTransporteDeOrgaosPelaFab} />
                                    </div>
                                </div>
                            </div>

                            {/* 26- Matéria 43 saude */}

                            <div id="compra-de-medicamentos-tem-reforco-de-R-80-milhoes" className="picture-item grayscale square-two-rows" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-three">
                                        Compra de medicamentos tem <strong>reforço de R$ 80 milhões</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/26-compra-medicamentos.png')}/>
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={CompraDeMedicamentosTemReforcoDeR80Milhoes} />
                                    </div>
                                </div>
                            </div>

                            {/* 27-Matéria 56 social */}

                            <div id="cartao-reforma-r-685-milhoes-para-renovar-moradias" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["social"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Cartão Reforma: R$ 685 milhões para <strong>renovar moradias</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/27-cartao-reforma.png')}/>
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={CartaoReformaR685MilhoesParaRenovarMoradias} />
                                    </div>
                                </div>
                            </div>

                            {/* 28-Matéria 46 gestão */}

                            <div id="gestao-eficiente-gera-economia-para-a-populacao" className="picture-item grayscale square" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Gestão eficiente gera <strong>economia para a população</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/28-gestao-eficiente.png')}/>
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={GestaoEficienteGeraEconomiaParaAPopulacao} />
                                    </div>
                                </div>
                            </div>

                            {/* 29 Matéria 40- 11 economia */}

                            <div id="teto-dos-gastos" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_two type">
                                    <div className="float-title float-title-one">
                                        Teto dos gastos <strong>ajusta as contas públicas</strong>
                                    </div>
                                                                    {/* <div className="thumb">
                                                                        <img alt="" src={require('')} src="../assets/img/thumb/40-PF-apreensao-drogas.png"/>
                                                                    </div>  */}
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={TetoDosGastos} />
                                    </div>
                                </div>
                            </div>

                            {/* 30-Matéria 52 social */}

                            <div id="bolsa-familia-tem-aumento-no-beneficio-e-fila-zerada" className="picture-item grayscale square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-one">
                                        Bolsa família tem aumento no benefício e <strong>fila zerada</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/30-bolsa-familia.png')}/>
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={BolsaFamiliaTemAumentoNoBeneficioEFilaZerada} />
                                    </div>
                                </div>
                            </div>

                            {/* 31- Matéria 57 social */}

                            <div id="minha-Casa-minha-vida-793-mil-unidades-em-20-meses" className="picture-item grayscale square-two-columns" tabIndex="0" data-groups='["social"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Minha Casa Minha Vida: <strong>793 mil unidades em 20 meses</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/31-minha-casa-minha-vida.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}minha-Casa-minha-vida-793-mil-unidades-em-20-meses`} component={MinhaCasaMinhaVida793MilUnidadesEm20Meses} />
                                    </div>
                                </div>
                            </div>

                            {/* 32-Matéria 59 social */}
                            <div id="recorde-na-emissao-de-titulos-de-propriedade-em-2017" className="picture-item square-two-columns" tabIndex="0" data-groups='["social"]'>
                                <div className="type_five type">
                                    <div className="float-title float-title-two-collumns">
                                        Recorde na emissão de títulos de <strong>propriedade em 2017</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/32-titulos-propriedades.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}recorde-na-emissao-de-titulos-de-propriedade-em-2017`} component={RecordeNaEmissaoDeTitulosDePropriedadeEm2017} />
                                    </div>
                                </div>
                            </div>

                            {/* 33- Matéria 60 social */}

                            <div id="entrega-recorde-de-titulos-da-reforma-agraria" className="picture-item square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Entrega <strong>recorde de títulos</strong> da reforma agrária
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/33-reforma-agraria.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}entrega-recorde-de-titulos-da-reforma-agraria`} component={EntregaRecordeDeTitulosDaReformaAgraria} />
                                    </div>
                                </div>
                            </div>

                            {/* 34- Matéria 64 segurança e defesa */}

                            <div id="rio-mais-seguro-com-intervencao-federal" className="picture-item grayscale square" tabIndex="0" data-groups='["seguranca-e-defesa"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>Rio mais seguro</strong> com intervenção federal
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/34-rio-seguro.png')}/>
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}rio-mais-seguro-com-intervencao-federal`} component={RioMaisSeguroComIntervencaoFederal} />
                                    </div>
                                </div>
                            </div>

                            {/* 35 Matéria 65 segurança e defesa */}
                            <div id="governo-reforca-operacoes-na-faixa-de-fronteira" className="picture-item grayscale square" tabIndex="0" data-groups='["seguranca-e-defesa"]'>
                                <div className="type_eight type">
                                    <div className="float-title float-title-one">
                                        <strong>Governo reforça operações</strong> na faixa de fronteira
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/35-governo-reforca.png')}/>
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-reforca-operacoes-na-faixa-de-fronteira`} component={GovernoReforcaOperacoesNaFaixaDeFronteira} />
                                    </div>
                                </div>
                            </div>

                            {/* 36- Matéria 74 meio ambiente */}
                            <div id="quase-duas-francas-de-unidades-de-conservacao-criadas" className="picture-item square-two-rows" tabIndex="0" data-groups='["meio-ambiente"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Quase duas Franças de Unidades de <strong>Conservação criadas</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/36-unidades-conservacao.png')}/>
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}quase-duas-francas-de-unidades-de-conservacao-criadas`} component={QuaseDuasFrancasDeUnidadesDeConservacaoCriadas} />
                                    </div>
                                </div>
                            </div>

                            {/* 37- Matéria 86 cultura */}

                            <div id="id-jovem-amplia-acesso-a-cultura-de-500-mil-jovens" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["cultura"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>ID Jovem amplia acesso à cultura</strong> de 500 mil jovens
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/37-jovem-id.png')}/>
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}id-jovem-amplia-acesso-a-cultura-de-500-mil-jovens`} component={IdJovemAmpliaAcessoACulturaDe500MilJovens} />
                                    </div>
                                </div>
                            </div>

                            {/* 38- Matéria 71 infraestrutura */}

                            <div id="integracao-do-sao-francisco-mais-vida-no-nordeste" className="picture-item grayscale square" tabIndex="0" data-groups='["infraestrutura"]'>
                                <div className="type_two type">
                                    <div className="float-title float-title-one">
                                        Integração do São Francisco: <strong>mais vida no Nordeste</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/38-integracao-rio-sao-francisco.png')}/>
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}integracao-do-sao-francisco-mais-vida-no-nordeste`} component={IntegracaoDoSaoFranciscoMaisVidaNoNordeste} />
                                    </div>
                                </div>
                            </div>


                            {/* 39 - Matéria 75 meio-ambiente */}

                            <div id="multas-ambientais-viram-investimento" className="picture-item grayscale square" tabIndex="0" data-groups='["meio-ambiente"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Multas ambientais <strong>viram investimento</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/39-multas-ambientais.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}multas-ambientais-viram-investimento`} component={MultasAmbientaisViramInvestimento} />
                                    </div>
                                </div>
                            </div>

                            {/* Matéria 40- 66 segurança e defesa */}

                            <div id="pf-bate-recorde-historico-de-apreensao-de-drogas" className="picture-item square" tabIndex="0" data-groups='["seguranca-e-defesa"]'>
                                <div className="type_six_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>PF bate recorde</strong> histórico de apreensão de drogas
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/teto-gastos.png')}/>
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}pf-bate-recorde-historico-de-apreensao-de-drogas`} component={PfBateRecordeHistoricoDeApreensaoDeDrogas} />
                                    </div>
                                </div>
                            </div>


                            <div id="video-relogio" className="picture-item alternate center" data-groups='["todos"]'>
                                <img alt="" className="play-button2 play" src={require('../assets/img/thumb/relogio_thumb.jpg')}/>
                            </div>

                            {/* FIM PUBLICAÇÃO */}
                        </div>

                        <div id="bottom">
                            <img alt="" src={logoRodape} srcSet={`${logoRodape2} 2x, ${logoRodape3} 3x`} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
