import React, { Component } from 'react';
import Salutacio from './Salutacio.js';

class LoginControl extends Component {
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;

        let button;

        if (isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }else{
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return(
            <span>
                <Saluda isLoggedIn={isLoggedIn}/>
                {button}
            </span>
        )
    }
}

function SalutacioInvitat(props){
    return <span>Siusplau, identifica't.</span>
}

function Saluda(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        const usuari = "Júlia";

        return <Salutacio nick={usuari} />;
    }else{
        return <SalutacioInvitat/>;
    }

}

function LoginButton(props){
    return(
        <button onClick={props.onClick} className="btn btn-success">
            Login
        </button>
    )
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick} className="btn btn-danger">
            Logout
        </button>
    )
}

export default LoginControl;