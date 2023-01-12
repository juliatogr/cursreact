import React from 'react';
import { useParams } from 'react-router-dom';
import refugios from './refugios.json';

function Refugis(){
    //Guardem en el console log els parametres que rebem
    console.log("useParams", useParams());
    const { id } = useParams();
    const listRefus = refugios.map((refugio) =>
        <li key={refugio.refugio_id.toString()}>
            <a href={`/refugis/${refugio.name}`}> {`${refugio.name}`} </a>
        </li>
    );
    
    return (
        <>
        <h1>Llista de refugis</h1>
        <ul>
            {listRefus}
        </ul>
        <h2>El refugi seleccionat és { id }</h2>
        </>
    )
}
export default Refugis;