import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import $ from 'jquery';

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

// matérias novas
import ProducaoVeiculosVoltaCrescer from './contents/ProducaoVeiculosVoltaCrescer';
import Apos20AnosDisputa from './contents/Apos20AnosDisputa';
import BrasilAmpliaSeuParque from './contents/BrasilAmpliaSeuParque';
import MesmoComOperacaoCarneFraca from './contents/MesmoComOperacaoCarneFraca';
import ComVacinacaoBrasilRecebeCertificado from './contents/ComVacinacaoBrasilRecebeCertificado';
import PlanoAgroModerniza from './contents/PlanoAgroModerniza';
import NovaGradeCurricularUnifica from './contents/NovaGradeCurricularUnifica';
import ProgramaMedioTecPermite from './contents/ProgramaMedioTecPermite';
import GovernoInvesteNaFormacao from './contents/GovernoInvesteNaFormacao';
import GovernoAmpliaParticipacao from './contents/GovernoAmpliaParticipacao';
import GovernoAmpliaInvestimento from './contents/GovernoAmpliaInvestimento';
import RepassesNaSaudeGanhamReforco from './contents/RepassesNaSaudeGanhamReforco';
import GovernoHabilitaUpas from './contents/GovernoHabilitaUpas';
import GovernoInvesteEmTesteRapido from './contents/GovernoInvesteEmTesteRapido';
import GovernoAdquireRepelentesParaGestante from './contents/GovernoAdquireRepelentesParaGestante';
import ReajusteNoPrecoMedioDeMedicamento from './contents/ReajusteNoPrecoMedioDeMedicamento';
import GovernoOfereceMelhorTratamento from './contents/GovernoOfereceMelhorTratamento';
import CartoriosDeTodoOBrasilPoderaoEmitir from './contents/CartoriosDeTodoOBrasilPoderaoEmitir';
import NovoFormatoDaCarteiraDeHabilitacao from './contents/NovoFormatoDaCarteiraDeHabilitacao';
import GovernoLancaDocumentosDigitais from './contents/GovernoLancaDocumentosDigitais';
import GovernoAcataConselhao from './contents/GovernoAcataConselhao';
import TaxigovGeraReducaoDeCustos from './contents/TaxigovGeraReducaoDeCustos';

import MultasAmbientaisViramInvestimento from './contents/MultasAmbientaisViramInvestimento';
import PfBateRecordeHistoricoDeApreensaoDeDrogas from './contents/PfBateRecordeHistoricoDeApreensaoDeDrogas';

// import afogado from '../assets/videos/AFOGADO.mp4';
// import afogadoMobile from '../assets/videos/afogados_mobile.mp4';

import vertical from '../assets/img/vertical.png';

import logoBranco from '../assets/img/logo-branco.png';
import logoBranco2 from '../assets/img/logo-branco@2x.png';
import logoBranco3 from '../assets/img/logo-branco@3x.png';

import sharePreto from '../assets/img/share-preto.png';
import sharePreto2 from '../assets/img/share-preto@2x.png';
import sharePreto3 from '../assets/img/share-preto@3x.png';

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
    constructor(props) {
        super(props);
        this.state = {
            video: ''
        }
    }
    componentDidMount() {
        setTimeout(() => {
            window.initScript();
        }, 200);
        this.loadVideo();
        // window.historyProp = this.props.history;
        
    }
    loadVideo() {
        this.setState({
            video: ($(window).width() < 1000) ? 'static/videos/afogados_mobile.mp4' : 'static/videos/afogados.mp4'
        });
    }
    openModal = (event) => {
        let _id = $(event.target).parents('.picture-item').attr('id');

        // _id = (_id) ? _id : $('.base').data('page');
        // console.log('error aki', $('.base').data('page'));
        if(_id) {
            setTimeout(() => {
                this.props.history.push(`/${_id}`);
            }, 1000);
        }

    }
    render() {
        return (
            <div className="base" data-page={this.props.location.pathname}>
                <div id="fullpage" >
                    <div id="container2" className="container-white wrapper">
                        <div className="videoloop">
                            <header className="topo-logo">
                                <div className="topo-marca">
                                    <img alt="" src={logoBranco} srcSet={`${logoBranco2} 2x, ${logoBranco3} 3x`} className="gov-br " />
                                </div>

                                <div className="topo-links">
                                    <a href="documentos/balanco.pdf" target="_blank">Balanço de Governo</a>
                                </div>

                                <div className="topo-share">
                                    <img alt="" src={sharePreto} srcSet={`${sharePreto2} 2x, ${sharePreto3} 3x`} className="logo share-top share" />

                                    <div className=" topo-icons">
                                        <div className="top-menu facebook facebook-share-top" style={{display: 'none'}}>
                                            <br />
                                            <img alt="" src="static/images/ic-facebook.png" srcSet={`static/images/ic-facebook@2x.png 2x, static/images/ic-facebook@3x.png 3x`} className="logo share facebook-icon" />
                                        </div>

                                        <br />

                                        <div className="top-menu twitter twitter-share-top" style={{display: 'none'}}>
                                            <img alt="" src="static/images/ic-twitter.png" srcSet="static/images/ic-twitter@2x.png 2x, static/images/ic-twitter@3x.png 3x" className="logo share twitter-icon" />
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </header>
                        </div>

                        <video autoPlay muted loop id="myVideo">
                            <source type='video/mp4' src={this.state.video} />
                            {/* <source src={afogadoMobile} type="video/mp4" media="all and (max-width: 1000px)" />
                            <source src={afogado} type="video/mp4" /> */}
                        </video>
                        <div id="slideshow">
                            <h4 className="slideshow-element">Saímos da recessão</h4>
                            <h4 className="slideshow-element">O Brasil voltou a respirar</h4>
                            <h4 className="slideshow-element">No fundo, você sabe que melhorou</h4>
                        </div>
                        <div id="scroll-first" className="scroll-first scroll">
                            <div>
                                <img alt="" className="vertical hide" src={vertical} />
                            </div>
                            <div className="icon-scroll">
                            </div>

                            <br />

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
                                                <a href="documentos/balanco.pdf" target="_blank" style={{ color: 'black' }}>Balanço de Governo</a>
                                            </div>

                                            <div className="topo-share">
                                                <img alt="" src={sharePreto} srcSet={`${sharePreto2} 2x, ${sharePreto3} 3x`} className="share-top share" />
                                                <div className="topo-icons">

                                                    <div className="top-menu facebook facebook-share-top" style={{display: 'none'}}>
                                                        <br />
                                                        <img alt="" src="static/images/ic-facebook.png" srcSet="static/images/ic-facebook@2x.png 2x, static/images/ic-facebook@3x.png 3x" className="share facebook-icon" />
                                                    </div>

                                                    <br />

                                                    <div className="top-menu twitter twitter-share-top" style={{display: 'none'}}>
                                                        <img alt="" src="static/images/ic-twitter.png" srcSet="static/images/ic-twitter@2x.png 2x, static/images/ic-twitter@3x.png 3x" className="share twitter-icon" />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                        </header>
                                    </div>
                                </div>
                            </div>

                            <br />

                            <div>
                                <span className="bigger-title-text"> Avançamos.</span>
                            </div>

                            <br /><br />

                            <div>
                                <img alt="" src={vertical} className="vertical hide" />
                            </div>

                            <br />

                            <div id="scroll-to-page" className="scroll">
                                <div>
                                    <img alt="" src={vertical} className="vertical hide" />
                                </div>
                                <div className="icon-scroll scroll-margin logo">
                                </div>

                                <br />
                                <span className="smaller-title-text">
                                    ROLE PARA BAIXO
                                </span>
                            </div>
                        </div>

                        <div className="container navigation">
                            <NavLink exact to="/" activeClassName="button-active" id="todos" className="button" shuffle="Todos">Todos</NavLink>
                            <NavLink to="/economia" activeClassName="button-active" id="economia" className="button" shuffle="economia">Economia</NavLink>
                            <NavLink to="/meio-ambiente" activeClassName="button-active" id="meio-ambiente" className="button" shuffle="meio-ambiente">Meio Ambiente</NavLink>
                            <NavLink to="/cultura" activeClassName="button-active" id="cultura" className="button" shuffle="cultura">Cultura</NavLink>
                            <NavLink to="/gestao" activeClassName="button-active" id="gestao" className="button" shuffle="gestao">Gestão</NavLink>
                            <NavLink to="/social" activeClassName="button-active" id="social" className="button" shuffle="social">Social</NavLink>
                            <NavLink to="/seguranca-e-defesa" activeClassName="button-active" id="seguranca-e-defesa" className="button" shuffle="seguranca-e-defesa">Seguranca e Defesa</NavLink>
                        </div>

                        <div id="shuffle-container" className="shuffle-container">

                            {/* 1 - Matéria 1 Economia */}

                            <div onClick={this.openModal.bind(this)} to="em-2017-brasil-tem-menor-inflacao-em-duas-decadas" id="em-2017-brasil-tem-menor-inflacao-em-duas-decadas" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-one">
                                        Inflação de 2,95% em 2017 é a <strong>menor</strong> em 20 anos
                                    </div>

                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/01-inflacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}em-2017-brasil-tem-menor-inflacao-em-duas-decadas`} component={Em2017BrasilTemMenorInflacaoEmDuasDecadas} />
                                    </div>
                                </div>
                            </div>
                            {/* 2-Matéria 4 Economia */}

                            <div onClick={this.openModal.bind(this)} to="governo-propoe-salario-minimo-de-1002-para-2019" id="governo-propoe-salario-minimo-de-1002-para-2019" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
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

                            <div onClick={this.openModal.bind(this)} to="PIB-de-1-e-tomada-do-crescimento-apos-a-maior-recessao-em-20-anos" id="PIB-de-1-e-tomada-do-crescimento-apos-a-maior-recessao-em-20-anos" className="picture-item square" tabIndex="0" data-groups='["economia"]'>
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

                            <div onClick={this.openModal.bind(this)} to="modernizacao-trabalhista-novos-contratos-esquentam-o-mercado-de-trabalho" id="modernizacao-trabalhista-novos-contratos-esquentam-o-mercado-de-trabalho" className="picture-item grayscale square-two-rows" tabIndex="0" data-groups='["energia"]'>
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
                            <div onClick={this.openModal.bind(this)} to="depoimento-presidente-da-caixa" id="depoimento-presidente-da-caixa" className="picture-item grayscale square-two-rows-and-columns" tabIndex="0" data-groups='["todos"]'>
                                <div className="type_three type">
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/05-video-entrevista1.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}depoimento-presidente-da-caixa`} component={DepoimentoPresidenteDaCaixa} />
                                    </div>
                                </div>
                            </div>


                            {/* 6 - Matéria 5 Economia */}

                            <div onClick={this.openModal.bind(this)} to="mais-de-204-mil-vagas-com-carteira-assinada-foram-criadas-em-2018" id="mais-de-204-mil-vagas-com-carteira-assinada-foram-criadas-em-2018" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-one">
                                        Postos de trabalho <strong>voltam a crescer</strong> em 2018
                                    </div>

                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/06-postos-de-trabalho.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}mais-de-204-mil-vagas-com-carteira-assinada-foram-criadas-em-2018`} component={MaisDe204MilVagasComCarteiraAssinadaForamCriadasEm2018} />
                                    </div>
                                </div>
                            </div>



                            {/* 8 - Matéria 3 Economia */}

                            <div onClick={this.openModal.bind(this)} to="taxa-basica-de-juros-e-reduzida-a-65-a-menor-da-historia" id="taxa-basica-de-juros-e-reduzida-a-65-a-menor-da-historia" className="picture-item square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-one">
                                        Taxa de juros atinge 6,5%, <strong>a menor da história</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/08-taxa-de-juros-menor.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}taxa-basica-de-juros-e-reduzida-a-65-a-menor-da-historia`} component={TaxaBasicaDeJurosEReduzidaA65AMenorDaHistoria} />
                                    </div>
                                </div>
                            </div>

                            {/* 7 - Matéria 10 Economia */}

                            <div onClick={this.openModal.bind(this)} to="com-lei-de-governanca" id="com-lei-de-governanca" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Estatais têm lucro de <strong>R$ 28,4 bilhões em 2017</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/07-estatais-lucro.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}com-lei-de-governanca`} component={ComLeiDeGovernanca} />
                                    </div>
                                </div>
                            </div>
                            {/* 9 - Matéria 7 Economia */}

                            <div onClick={this.openModal.bind(this)} to="saques-das-contas-inativas" id="saques-das-contas-inativas" className="picture-item square-two-columns" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Saques de contas do FGTS somam <strong>R$ 44 bilhões</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/09-saque-fgts.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}saques-das-contas-inativas`} component={SaquesDasContasInativas} />
                                    </div>
                                </div>
                            </div>


                            {/* 10-Matéria 8 Economia */}

                            <div onClick={this.openModal.bind(this)} to="saques-do-pispasep-beneficiam" id="saques-do-pispasep-beneficiam" className="picture-item grayscale square-two-columns" tabIndex="0" data-groups='["energia"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Saques do PIS/Pasep injetam até R$ <strong>21 bi na economia</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/10-saque-pis.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}saques-do-pispasep-beneficiam`} component={SaquesDoPispasepBeneficiam} />
                                    </div>
                                </div>
                            </div>

                            {/* PRIMEIRA METADE DA LEVA */}
                            {/* <div id="video-afogados" className="picture-item grayscale alternate center" data-groups='["todos"]'> */}
                            {/* <img id="video" className="play-button play" src={require('')} src="../assets/img/thumb/afogados_thumb.jpg"> */}
                            {/* </div> */}

                            {/* 11 - Matéria 26 Educação */}

                            <div onClick={this.openModal.bind(this)} to="fies-tera-350-mil" id="fies-tera-350-mil" className="picture-item square-two-columns" tabIndex="0" data-groups='["energia"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Fies abre 100 mil vagas a <strong>juro zero em 2018</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/11-fies-vagas.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}fies-tera-350-mil`} component={FiesTera350Mil} />
                                    </div>
                                </div>
                            </div>

                            {/* 12 Matéria 20 Agro */}

                            <div onClick={this.openModal.bind(this)} to="agricultura-familiar-recebe" id="agricultura-familiar-recebe" className="picture-item square-two-columns" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Agricultura familiar recebe crédito de <strong>R$ 30 bilhões</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/12-agricultura-familiar.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}agricultura-familiar-recebe`} component={AgriculturaFamiliarRecebe} />
                                    </div>
                                </div>
                            </div>


                            {/* 13 - Matéria 15 Energia */}

                            <div onClick={this.openModal.bind(this)} to="brasil-tem-recorde-de-producao" id="brasil-tem-recorde-de-producao" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Petróleo : <strong>Brasil bate recorde</strong> de produção em 2017
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/13-petroleo-recorde.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}brasil-tem-recorde-de-producao`} component={BrasilTemRecordeDeProducao} />
                                    </div>
                                </div>
                            </div>

                            {/* 14 - Matéria 18 Energia */}

                            <div onClick={this.openModal.bind(this)} to="brasil-e-o-segundo-produtor" id="brasil-e-o-segundo-produtor" className="picture-item grayscale square" tabIndex="0" data-groups='["energia"]'>
                                <div className="type_two type">
                                    <div className="float-title float-title-two">
                                        Brasil é o <strong>segundo produtor mundial</strong> de biodiesel
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/14-biodiesel.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}brasil-e-o-segundo-produtor`} component={BrasilEOSegundoProdutor} />
                                    </div>
                                </div>
                            </div>

                            {/* 15-Matéria 27 Educação */}

                            <div onClick={this.openModal.bind(this)} to="recorde-de-bolsas-ofertas" id="recorde-de-bolsas-ofertas" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_eight type">
                                    <div className="float-title float-title-one">
                                        ProUni cresce 10% e tem <strong>recorde de bolsas</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/15-prouni-recorde.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}recorde-de-bolsas-ofertas`} component={RecordeDeBolsasOfertas} />
                                    </div>
                                </div>
                            </div>


                            {/* 17-Matéria 24 Educação */}

                            <div onClick={this.openModal.bind(this)} to="discutido-ha-mais-de-20-anos" id="discutido-ha-mais-de-20-anos" className="picture-item square-two-rows" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title float-title-one">
                                        Novo Ensino Médio: <strong>educação do Brasil no século 21</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/17-novo-ensino-medio.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}discutido-ha-mais-de-20-anos`} component={DiscutidoHaMaisDe20Anos} />
                                    </div>
                                </div>
                            </div>

                            {/* 18 - Matéria 16 energia */}

                            <NavLink to="leiloes-de-energia-atraem-bilhoes" id="leiloes-de-energia-atraem-bilhoes" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["energia"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-three">
                                        Leilões de energia atraem <strong>bilhões em investimentos</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/18-leiloes.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}leiloes-de-energia-atraem-bilhoes`} component={LeiloesDeEnergiaAtraemBilhoes} />
                                    </div>
                                </div>
                            </NavLink>


                            {/* 16 Matéria 29 Educação */}

                            <NavLink to="programa-mais-alfabetizacao" id="programa-mais-alfabetizacao" className="picture-item grayscale square" tabIndex="0" data-groups='["educacao"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-one">
                                        R$ 523 milhões para o <strong>Programa Mais Alfabetização</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/16-alfabetizacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}programa-mais-alfabetizacao`} component={ProgramaMaisAlfabetizacao} />
                                    </div>
                                </div>
                            </NavLink>
                            {/* 20- Matéria 9 Economia */}

                            <NavLink to="saldo-da-balanca-comercial" id="saldo-da-balanca-comercial" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-four">
                                        Balança comercial tem <strong>recorde histórico em 2017</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/20-balanca-comercial.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}saldo-da-balanca-comercial`} component={SaldoDaBalancaComercial} />
                                    </div>
                                </div>
                            </NavLink>



                            {/* 19- Matéria 19 Agro */}

                            <NavLink to="brasil-tem-safra-recorde" id="brasil-tem-safra-recorde" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Brasil tem <strong>safras recordes</strong> e mais exportação
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/19-brasil-exportacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}brasil-tem-safra-recorde`} component={BrasilTemSafraRecorde} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* <div className="picture-item grayscale alternate" data-groups='["todos"]'> */}
                            {/* <img alt="" className="play-button play" src={require('')} src="../assets/img/thumb/video02.jpg"/> */}
                            {/* </div> */}

                            {/* FIM PRIMEIRA LEVA  */}

                            {/* INICIO SEGUNDA LEVA */}

                            {/* 21-Matéria 36 saude */}

                            <NavLink to="SAMU-192-tem-65-da-sua-frota-renovada-em-dois-anos" id="SAMU-192-tem-65-da-sua-frota-renovada-em-dois-anos" className="picture-item square-two-columns" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        <strong>SAMU 192</strong> tem 65% da sua frota renovada em dois anos
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/21-samu.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}SAMU-192-tem-65-da-sua-frota-renovada-em-dois-anos`} component={SAMU192Tem65DaSuaFrotaRenovadaEmDoisAnos} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 22 Matéria 33 saude */}
                            <NavLink to="numero-de-consultas-nas-ubs" id="numero-de-consultas-nas-ubs" className="picture-item grayscale square-two-columns" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        UBS:  <strong>gestão eficiente</strong> leva saúde para quem precisa
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/22-ubs-gestao-eficiente.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}numero-de-consultas-nas-ubs`} component={NumeroDeConsultasNasUbs} />
                                    </div>
                                </div>
                            </NavLink>


                            {/* 23-Matéria 38 saude */}

                            <NavLink to="casos-de-dengue-zika-e-chicungunya-sao-reduzidos" id="casos-de-dengue-zika-e-chicungunya-sao-reduzidos" className="picture-item grayscale square" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_one type">
                                    <div className="float-title float-title-three">
                                        Casos de dengue, zika e chicungunya <strong>são reduzidos</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/23-casos-dengue.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}casos-de-dengue-zika-e-chicungunya-sao-reduzidos`} component={CasosDeDengueZikaEChicungunyaSaoReduzidos} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 24-Matéria 42 saude */}

                            <NavLink to="cobertura-dos-planos-de-saude-e-ampliada" id="cobertura-dos-planos-de-saude-e-ampliada" className="picture-item grayscale square" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-three">
                                        Cobertura dos planos de saúde <strong>é ampliada</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/24-cobertura-planos-de-saude.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}cobertura-dos-planos-de-saude-e-ampliada`} component={CoberturaDosPlanosDeSaudeEAmpliada} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 25-Matéria 37 saude */}

                            <NavLink to="decreto-assegura-transporte-de-orgaos-pela-fab" id="decreto-assegura-transporte-de-orgaos-pela-fab" className="picture-item square" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_eigth-alt type">
                                    <div className="float-title-alt float-title-three">
                                        Decreto assegura <strong>transporte de órgãos pela FAB</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/25-transporte-fab.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}decreto-assegura-transporte-de-orgaos-pela-fab`} component={DecretoAsseguraTransporteDeOrgaosPelaFab} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 26- Matéria 43 saude */}

                            <NavLink to="compra-de-medicamentos-tem-reforco-de-R-80-milhoes" id="compra-de-medicamentos-tem-reforco-de-R-80-milhoes" className="picture-item grayscale square-two-rows" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-three">
                                        Compra de medicamentos tem <strong>reforço de R$ 80 milhões</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/26-compra-medicamentos.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}compra-de-medicamentos-tem-reforco-de-R-80-milhoes`} component={CompraDeMedicamentosTemReforcoDeR80Milhoes} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 27-Matéria 56 social */}

                            <NavLink to="cartao-reforma-r-685-milhoes-para-renovar-moradias" id="cartao-reforma-r-685-milhoes-para-renovar-moradias" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["social"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Cartão Reforma: R$ 685 milhões para <strong>renovar moradias</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/27-cartao-reforma.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}cartao-reforma-r-685-milhoes-para-renovar-moradias`} component={CartaoReformaR685MilhoesParaRenovarMoradias} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 28-Matéria 46 gestão */}

                            <NavLink to="gestao-eficiente-gera-economia-para-a-populacao" id="gestao-eficiente-gera-economia-para-a-populacao" className="picture-item grayscale square" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Gestão eficiente gera <strong>economia para a população</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/28-gestao-eficiente.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}gestao-eficiente-gera-economia-para-a-populacao`} component={GestaoEficienteGeraEconomiaParaAPopulacao} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 29 Matéria 40- 11 economia */}

                            <NavLink to="teto-dos-gastos" id="teto-dos-gastos" className="picture-item grayscale square" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-one">
                                        Teto dos gastos <strong>ajusta as contas públicas</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/rectangle-2-copy-99.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}teto-dos-gastos`} component={TetoDosGastos} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 30-Matéria 52 social */}

                            <NavLink to="bolsa-familia-tem-aumento-no-beneficio-e-fila-zerada" id="bolsa-familia-tem-aumento-no-beneficio-e-fila-zerada" className="picture-item grayscale square" tabIndex="0" data-groups='["social"]'>
                                <div className="type_six type">
                                    <div className="float-title float-title-one">
                                        Bolsa família tem aumento no benefício e <strong>fila zerada</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/30-bolsa-familia.png')} />
                                    </div>

                                    <div className="content">
                                        <Route path={`${this.props.match.path}bolsa-familia-tem-aumento-no-beneficio-e-fila-zerada`} component={BolsaFamiliaTemAumentoNoBeneficioEFilaZerada} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 31- Matéria 57 social */}

                            <NavLink to="minha-Casa-minha-vida-793-mil-unidades-em-20-meses" id="minha-Casa-minha-vida-793-mil-unidades-em-20-meses" className="picture-item grayscale square-two-columns" tabIndex="0" data-groups='["social"]'>
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
                            </NavLink>

                            {/* 32-Matéria 59 social */}
                            <NavLink to="recorde-na-emissao-de-titulos-de-propriedade-em-2017" id="recorde-na-emissao-de-titulos-de-propriedade-em-2017" className="picture-item square-two-columns" tabIndex="0" data-groups='["social"]'>
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
                            </NavLink>

                            {/* 33- Matéria 60 social */}

                            <NavLink to="entrega-recorde-de-titulos-da-reforma-agraria" id="entrega-recorde-de-titulos-da-reforma-agraria" className="picture-item square" tabIndex="0" data-groups='["social"]'>
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
                            </NavLink>

                            {/* 34- Matéria 64 segurança e defesa */}

                            <NavLink to="rio-mais-seguro-com-intervencao-federal" id="rio-mais-seguro-com-intervencao-federal" className="picture-item grayscale square" tabIndex="0" data-groups='["seguranca-e-defesa"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>Rio mais seguro</strong> com intervenção federal
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/34-rio-seguro.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}rio-mais-seguro-com-intervencao-federal`} component={RioMaisSeguroComIntervencaoFederal} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 35 Matéria 65 segurança e defesa */}
                            <NavLink to="governo-reforca-operacoes-na-faixa-de-fronteira" id="governo-reforca-operacoes-na-faixa-de-fronteira" className="picture-item grayscale square" tabIndex="0" data-groups='["seguranca-e-defesa"]'>
                                <div className="type_eight type">
                                    <div className="float-title float-title-one">
                                        <strong>Governo reforça operações</strong> na faixa de fronteira
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/35-governo-reforca.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-reforca-operacoes-na-faixa-de-fronteira`} component={GovernoReforcaOperacoesNaFaixaDeFronteira} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 36- Matéria 74 meio ambiente */}
                            <NavLink to="quase-duas-francas-de-unidades-de-conservacao-criadas" id="quase-duas-francas-de-unidades-de-conservacao-criadas" className="picture-item square-two-rows" tabIndex="0" data-groups='["meio-ambiente"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Quase duas Franças de Unidades de <strong>Conservação criadas</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/36-unidades-conservacao.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}quase-duas-francas-de-unidades-de-conservacao-criadas`} component={QuaseDuasFrancasDeUnidadesDeConservacaoCriadas} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 37- Matéria 86 cultura */}

                            <NavLink to="id-jovem-amplia-acesso-a-cultura-de-500-mil-jovens" id="id-jovem-amplia-acesso-a-cultura-de-500-mil-jovens" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["cultura"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>ID Jovem amplia acesso à cultura</strong> de 500 mil jovens
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/37-jovem-id.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}id-jovem-amplia-acesso-a-cultura-de-500-mil-jovens`} component={IdJovemAmpliaAcessoACulturaDe500MilJovens} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 38- Matéria 71 infraestrutura */}

                            <NavLink to="integracao-do-sao-francisco-mais-vida-no-nordeste" id="integracao-do-sao-francisco-mais-vida-no-nordeste" className="picture-item grayscale square" tabIndex="0" data-groups='["infraestrutura"]'>
                                <div className="type_two type">
                                    <div className="float-title float-title-one">
                                        Integração do São Francisco: <strong>mais vida no Nordeste</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/38-integracao-rio-sao-francisco.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}integracao-do-sao-francisco-mais-vida-no-nordeste`} component={IntegracaoDoSaoFranciscoMaisVidaNoNordeste} />
                                    </div>
                                </div>
                            </NavLink>


                            {/* 39 - Matéria 75 meio-ambiente */}

                            <NavLink to="multas-ambientais-viram-investimento" id="multas-ambientais-viram-investimento" className="picture-item grayscale square" tabIndex="0" data-groups='["meio-ambiente"]'>
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
                            </NavLink>

                            {/* Matéria 40- 66 segurança e defesa */}

                            <NavLink to="pf-bate-recorde-historico-de-apreensao-de-drogas" id="pf-bate-recorde-historico-de-apreensao-de-drogas" className="picture-item square" tabIndex="0" data-groups='["seguranca-e-defesa"]'>
                                <div className="type_six_alt type">
                                    <div className="float-title-alt float-title-one">
                                        <strong>PF bate recorde</strong> histórico de apreensão de drogas
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/teto-gastos.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}pf-bate-recorde-historico-de-apreensao-de-drogas`} component={PfBateRecordeHistoricoDeApreensaoDeDrogas} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* inicio-bloco */}

                            {/* 41 - Matéria 13 economia */}
                        
                            <NavLink to="producao-veiculos-volta-crescer" id="producao-veiculos-volta-crescer" className="picture-item grayscale square-two-columns" tabIndex="0" data-groups='["economia"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Produção de veículos <strong>volta a crescer em 2017</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/rectangle-2-copy-87.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}producao-veiculos-volta-crescer`} component={ProducaoVeiculosVoltaCrescer} />
                                    </div>
                                </div>
                            </NavLink>
                        
                            {/* 42 - Matéria 14 economia */}
                            <NavLink to="plano-agro-moderniza" id="plano-agro-moderniza" className="picture-item square-two-columns" tabIndex="0" data-groups='["agro"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Plano <strong>Agro+ moderniza o agronegócio</strong> brasileiro
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/rectangle-2-copy-79.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}plano-agro-moderniza`} component={PlanoAgroModerniza} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* 43 - Matéria 17 energia */}

                            <NavLink to="apos-20-anos-disputa" id="apos-20-anos-disputa" className="picture-item square" tabIndex="0" data-groups='["econimia"]'>
                                <div className="type_five_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Acordo deve <strong>injetar R$ 12 bi na economia</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/rectangle-2-copy-83.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}apos-20-anos-disputa`} component={Apos20AnosDisputa} />
                                    </div>
                                </div>
                            </NavLink>
                        
                            {/* 44 - Matéria 21 - AGRO */}
                        
                            <NavLink to="mesmo-com-operacao-carne-fraca" id="mesmo-com-operacao-carne-fraca" className="picture-item grayscale square" tabIndex="0" data-groups='["agro"]'>
                                <div className="type_two type">
                                        <div className="float-title-alt float-title-one">
                                        Exportações de carne <strong>crescem 9% em 2017</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/exportacoes-carne.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}mesmo-com-operacao-carne-fraca`} component={MesmoComOperacaoCarneFraca} />
                                    </div>
                                </div>
                            </NavLink>
                        
                            {/* 45 - Matéria 22 agro */}
        
                            <NavLink to="com-vacinacao-brasil-recebe-certificado" id="com-vacinacao-brasil-recebe-certificado" className="picture-item grayscale square" tabIndex="0" data-groups='["agro"]'>
                                <div className="type_eight_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Brasil <strong>livre da febre aftosa</strong> com vacinação
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/rectangle-2-copy-84.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}com-vacinacao-brasil-recebe-certificado`} component={ComVacinacaoBrasilRecebeCertificado} />
                                    </div>
                                </div>
                            </NavLink>
                        
                            {/* 46 - Matéria 23 agro */}
                            <NavLink to="brasil-amplia-seu-parque" id="brasil-amplia-seu-parque" className="picture-item square-two-rows" tabIndex="0" data-groups='["energia"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Brasil se <strong>destaca na produção de energia eólica</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/rectangle-2-copy-86.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}brasil-amplia-seu-parque`} component={BrasilAmpliaSeuParque} />
                                    </div>
                                </div>
                            </NavLink>
                        
                            {/* 47 - Matéria 25 educação */}
                        
                            <NavLink to="nova-grade-curricular-unifica" id="nova-grade-curricular-unifica" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["educacao"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Nova grade curricular <strong>unifica ensino no Brasil</strong>
                                    </div>
                                    <div className="thumb">
                                        {/* <img alt="" className="column" src={require('../assets/img/thumb/37-jovem-id.png')} /> */}
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}nova-grade-curricular-unifica`} component={NovaGradeCurricularUnifica} />
                                    </div>
                                </div>
                            </NavLink>
                        
                            {/* 48 - Matéria 28 educação */}
                        
                            <NavLink to="programa-medioTec-permite" id="programa-medioTec-permite" className="picture-item grayscale square" tabIndex="0" data-groups='["educacao"]'>
                                <div className="type_two type">
                                    <div className="float-title-alt float-title-one">
                                        MedioTec oferece <strong>formação técnica para estudantes</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/rectangle-2-copy-89.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}programa-medioTec-permite`} component={ProgramaMedioTecPermite} />
                                    </div>
                                </div>
                            </NavLink>


                            {/* 49 - Matéria 30 educacao */}
                        
                            <NavLink to="governo-investe-na-formacao" id="governo-investe-na-formacao" className="picture-item grayscale square" tabIndex="0" data-groups='["educacao"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Governo <strong>investe R$ 1 bi na formação</strong> de professores
                                    </div>
                                    <div className="thumb">
                                        {/* <img alt="" src={require('../assets/img/thumb/39-multas-ambientais.png')} /> */}
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-investe-na-formacao`} component={GovernoInvesteNaFormacao} />
                                    </div>
                                </div>
                            </NavLink>
                        
                            {/* 50 - Matéria 31 saúde */}
                        
                            <NavLink to="governo-amplia-participacao" id="governo-amplia-participacao" className="picture-item square" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_six_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Mais <strong>Brasileiros no Mais Médicos</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/rectangle-2-copy-92.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-amplia-participacao`} component={GovernoAmpliaParticipacao} />
                                    </div>
                                </div>
                            </NavLink>
        
                            {/* fim-bloco */}

                            {/* inicio-bloco */}
                            
                            {/* 51 - Matéria 32 saude */}
                            
                            <NavLink to="governo-amplia-investimento" id="governo-amplia-investimento" className="picture-item grayscale square-two-columns" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        Mais <strong>recursos para a Saúde</strong> dos brasileiros
                                    </div>
                                    <div className="thumb">
                                        {/* <img alt="" className="column" src={require('../assets/img/thumb/31-minha-casa-minha-vida.png')} /> */}
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-amplia-investimento`} component={GovernoAmpliaInvestimento} />
                                    </div>
                                </div>
                            </NavLink>
                            
                            {/* 52 - Matéria 42 saude */}
                            <NavLink to="repasses-na-saude-ganham-reforco" id="repasses-na-saude-ganham-reforco" className="picture-item square-two-columns" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_five type">
                                    <div className="float-title float-title-two-collumns">
                                        Repasses na Saúde <strong>reforçam a atenção básica</strong>
                                    </div>
                                    <div className="thumb">
                                        {/* <img alt="" className="column" src={require('../assets/img/thumb/32-titulos-propriedades.png')} /> */}
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}repasses-na-saude-ganham-reforco`} component={RepassesNaSaudeGanhamReforco} />
                                    </div>
                                </div>
                            </NavLink>
                            
                            {/* 53 - Matéria 35 saude */}

                            <NavLink to="reajuste-no-preco-medio-de-medicamento" id="reajuste-no-preco-medio-de-medicamento" className="picture-item square" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_seven_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Medicamentos <strong>reajustados abaixo da inflação</strong>
                                    </div>
                                    <div className="thumb">
                                        {/* <img alt="" className="column" src={require('../assets/img/thumb/36-unidades-conservacao.png')} /> */}
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}reajuste-no-preco-medio-de-medicamento`} component={ReajusteNoPrecoMedioDeMedicamento} />
                                    </div>
                                </div>
                            </NavLink>
                            
                            {/* 54 - Matéria 39 saude */}
                        
                            <NavLink to="governo-investe-em-teste-rapido" id="governo-investe-em-teste-rapido" className="picture-item grayscale square" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Teste rápido para zika; <strong>assistência garantida</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/rectangle-2-copy-93.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-investe-em-teste-rapido`} component={GovernoInvesteEmTesteRapido} />
                                    </div>
                                </div>
                            </NavLink>
                            
                            {/* 45 - Matéria 40 saude */}
                            <NavLink to="governo-adquire-repelentes-para-gestante" id="governo-adquire-repelentes-para-gestante" className="picture-item grayscale square" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_eight_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Gestantes de <strong>baixa renda recebem repelentes</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/rectangle-2-copy-98.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-adquire-repelentes-para-gestante`} component={GovernoAdquireRepelentesParaGestante} />
                                    </div>
                                </div>
                            </NavLink>
                            
                            {/* 56 - Matéria 41 saude */}
                            <NavLink to="governo-habilita-upas" id="governo-habilita-upas" className="picture-item square-two-rows" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_one_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Mais <strong>206 UPAs 24 horas habilitadas</strong> a funcionar
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/rectangle-2-copy-104.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-habilita-upas`} component={GovernoHabilitaUpas} />
                                    </div>
                                </div>
                            </NavLink>
                            
                            {/* 57 - Matéria 44 saude */}
                        
                            <NavLink to="governo-oferece-melhor-tratamento" id="governo-oferece-melhor-tratamento" className="picture-item square-two-rows-and-columns" tabIndex="0" data-groups='["educacao"]'>
                                <div className="type_three_alt type">
                                    <div className="float-title-alt float-title-one">
                                        SUS ganha melhor <strong>tratamento contra HIV/Aids</strong>
                                    </div>
                                    <div className="thumb">
                                        {/* <img alt="" className="column" src={require('../assets/img/thumb/37-jovem-id.png')} /> */}
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-oferece-melhor-tratamento`} component={GovernoOfereceMelhorTratamento} />
                                    </div>
                                </div>
                            </NavLink>
                            
                            {/* 58 - Matéria 45 gestao */}
                        
                            <NavLink to="cartorios-de-todo-o-brasil-poderao-emitir" id="cartorios-de-todo-o-brasil-poderao-emitir" className="picture-item grayscale square" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Cartórios poderão <strong>emitir documentos de identidade</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/rectangle-2-copy-96.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}cartorios-de-todo-o-brasil-poderao-emitir`} component={CartoriosDeTodoOBrasilPoderaoEmitir} />
                                    </div>
                                </div>
                            </NavLink>
                            
                            {/* 59 - Matéria 47 gestão */}
                        
                            <NavLink to="novo-formato-da-carteira-de-habilitacao" id="novo-formato-da-carteira-de-habilitacao" className="picture-item grayscale square" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_two_alt type">
                                    <div className="float-title-alt float-title-one">
                                        CNH ganha chip e <strong>mais segurança contra fraudes</strong>
                                    </div>
                                    <div className="thumb">
                                        {/* <img alt="" src={require('../assets/img/thumb/39-multas-ambientais.png')} /> */}
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}novo-formato-da-carteira-de-habilitacao`} component={NovoFormatoDaCarteiraDeHabilitacao} />
                                    </div>
                                </div>
                            </NavLink>
                            
                            {/* 60 - Matéria 48 gestao */}
                        
                            <NavLink to="governo-lanca-documentos-digitais" id="governo-lanca-documentos-digitais" className="picture-item square" tabIndex="0" data-groups='["saude"]'>
                                <div className="type_six_alt type">
                                    <div className="float-title-alt float-title-one">
                                        Documentos digitais <strong>facilitam a vida do brasileiro</strong>
                                    </div>
                                    <div className="thumb">
                                        <img alt="" src={require('../assets/img/thumb/rectangle-2-copy-108.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-lanca-documentos-digitais`} component={GovernoLancaDocumentosDigitais} />
                                    </div>
                                </div>
                            </NavLink>
                            
                            {/* fim-bloco */}

                            {/* inicio-bloco */}
                            
                            {/* 61 - Matéria 50 gestao */}
                            
                            <NavLink to="governo-acata-conselhao" id="governo-acata-conselhao" className="picture-item grayscale square-two-columns" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_four_alt type">
                                    <div className="float-title-alt float-title-two-collumns">
                                        <strong>Governo acata 92% das recomendações</strong> do Conselhão
                                    </div>
                                    <div className="thumb">
                                        <img alt="" className="column" src={require('../assets/img/thumb/rectangle-2-copy-109.png')} />
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}governo-acata-conselhao`} component={GovernoAcataConselhao} />
                                    </div>
                                </div>
                            </NavLink>
                            
                            {/* 62 - Matéria 51 gestao */}
                            <NavLink to="taxigov-gera-reducao-de-custos" id="taxigov-gera-reducao-de-custos" className="picture-item square-two-columns" tabIndex="0" data-groups='["gestao"]'>
                                <div className="type_five type">
                                    <div className="float-title float-title-two-collumns">
                                        TaxiGov traz <strong>eficiência e economia para o Governo</strong>
                                    </div>
                                    <div className="thumb">
                                        {/* <img alt="" className="column" src={require('../assets/img/thumb/32-titulos-propriedades.png')} /> */}
                                    </div>
                                    <div className="content">
                                        <Route path={`${this.props.match.path}taxigov-gera-reducao-de-custos`} component={TaxigovGeraReducaoDeCustos} />
                                    </div>
                                </div>
                            </NavLink>

                            {/* fim-bloco - cuidado ao montar, observe a ordem dos blocos! */}

                            <div id="video-relogio" className="picture-item alternate center" data-groups='["todos"]'>
                                <img alt="" className="play-button2 play" src={require('../assets/img/thumb/relogio_thumb.jpg')} />
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
