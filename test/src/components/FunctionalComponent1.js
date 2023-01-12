import React from 'react';

const FunctionalComponent1 = ({ childToParent}) => {
    const data = "Info del fill cap el pare";

    return (
        <>
            <h1> Sóc un fill component</h1>
            <button onClick={ () => childToParent(data)} >PASSAR-LI DADES AL PARE </button>
        </>
    )
}

export default FunctionalComponent1;