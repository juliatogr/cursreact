import React, { Component } from 'react';

class ClassComponent extends Component{

    construtor(props){
        this.super(props);
    }

    render() {
        return (
        <>
            <h1>Sóc un component de classe </h1>
            <h1>Props amb variable: { this.props.propsFunctional1 } </h1>
            <h1>Props amb string: { this.props.propsFunctional2String } </h1>
            <h1>Props amb number: { this.props.propsFunctional3Number } </h1>
            <h1>Props amb objecte: { this.props.propsFunctional4Object.nom } </h1>
        </>
    )
    }
    
}

export default ClassComponent;