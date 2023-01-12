import React, { Component } from 'react';
import './Header.css';
import logo from '../img/refugios_libres.jpg';
import LoginControl from './LoginControl';

class Header extends Component {
    render() {
        var usuari = "Júlia";
        return(
            <h1 className=""> <img src={logo} height="50px" alt=""/>El teu portal de montanya <LoginControl nick={usuari}></LoginControl></h1>
        )
    }
}

export default Header