import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import IcFechar from '../assets/img/ic-fechar.png';
import IcFechar2 from '../assets/img/ic-fechar@2x.png';
import IcFechar3 from '../assets/img/ic-fechar@3x.png';

import IcFacebookBranco from '../assets/img/ic-facebook-branco.png';

class HeaderContent extends Component {
    render() {
        return (
            <div className="materia-header">
                <div className="button-close">
                    <button className="button-oval button-close">
                        <img alt="" src={IcFechar} srcSet={`${IcFechar2} 2x, ${IcFechar3} 3x`} className="button-close"/>
                    </button>
                </div>

                <div className="buttons-oval">
                    <span className="title-share">COMPARTILHAR</span>
                    <a className="facebook-share">
                        <img alt="" src={IcFacebookBranco} className="facebook-share"/>
                    </a>

                    <a className="twitter-share">
                        <img alt="" src="static/images/ic-twitter.png" srcSet="static/images/ic-twitter@2x.png 2x" className="twitter-share logo"/>
                    </a>
                </div>
            </div>
        )
    }
}
export default HeaderContent;