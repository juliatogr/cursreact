import React from 'react';

const FunctionalComponent = (props) => {
    return (
        <>
            <h1>Sóc un component funcional</h1>
            <h1>Props amb variable: { props.propsFunctional1 } </h1>
            <h1>Props amb string: { props.propsFunctional2String } </h1>
            <h1>Props amb number: { props.propsFunctional3Number } </h1>
            <h1>Props amb objecte: { props.propsFunctional4Object.nom } </h1>
        </>
    )
}

export default FunctionalComponent;