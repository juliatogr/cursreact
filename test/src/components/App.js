import './App.css';
import React from 'react';
import FunctionalComponent from './FunctionalComponent.js';
import FunctionalComponent1 from './FunctionalComponent1.js';
import ClassComponent from './ClassComponent.js';
import {useState} from 'react';


// code 5
// function sumar(){
//   return 2 + 2;
// }

// const nom = "Albert";

// const inLineStyle = {
//   color: "#2ecc71",
//   fontSize: "24px"
// }

// function App() {
//   return (
//     <>   
//     <p style={inLineStyle}> InLineStyle </p>
//       <div className="red">
//         <h2>  children</h2>
//       </div>
//       <h1 className="red"> funcions { sumar() }</h1>
//       <h1> Operacions Matematiques { 3 + 2 }</h1>
//       <h1> String {`Hola ${nom}`} </h1>
//       <h1> Logica / Ternary { ( 3 + 2 ) > 6 ? 'mayor' : 'menor' } </h1>
//      <img src="" alt="" />
//     </>
//   );
// }

// CODE 7

// const functionClick = () => {
//   console.log("Tinc un click");
// }

// const functionOnMouseOver = () => {
//   console.log("Tinc una passada de ratolí");
// }

// const funcioAmbParametres = (parametre) => {
//   console.log(`Funció invocada desde ${parametre}`);
// }
// function App() {
//   return (
//     <>
//     <button onClick = { () => funcioAmbParametres("onClick") }> Fes Click </button>
//     <h1 onMouseOver = { functionOnMouseOver }> Passa el ratolí per sobre </h1>
//     </>
//   );
// }

// }

// Code 14
// function App() {
//   const propFunc1 = "Hola";

//   const objecteExemple = {
//     nom: "Anna",
//     edat: 19
//   }

//   return (
//     <>
//     <div className='bg-primary card'>
//     <Header/>
//     </div>
//     <div>
//       <FunctionalComponent 
//       propsFunctional1 = { propFunc1 }
//       propsFunctional2String = "CadenaDeText"
//       propsFunctional3Number = { 3 }
//       propsFunctional4Object = { objecteExemple }
//       />
//     </div>
//     <div>
//       <ClassComponent
//       propsFunctional1 = { propFunc1 }
//       propsFunctional2String = "CadenaDeText"
//       propsFunctional3Number = { 3 }
//       propsFunctional4Object = { objecteExemple }
//       />
//     </div>
//     </>
//   );
// }


function App() {
  const propFunc1 = "Hola";

  const objecteExemple = {
    nom: "Anna",
    edat: 19
  }

  const [data, setData] = useState('');

  const childToParent = (dataFromChild) => {
  console.log('child to parent', dataFromChild);
  setData(dataFromChild)
}

  return (
    <>
    <div>
      <FunctionalComponent 
      propsFunctional1 = { propFunc1 }
      propsFunctional2String = "CadenaDeText"
      propsFunctional3Number = { 3 }
      propsFunctional4Object = { objecteExemple }
      />
    </div>
    <div>
      <ClassComponent
      propsFunctional1 = { propFunc1 }
      propsFunctional2String = "CadenaDeText"
      propsFunctional3Number = { 3 }
      propsFunctional4Object = { objecteExemple }
      />
    </div>
    <div>
      {data}
      <FunctionalComponent1 childToParent = {childToParent}/>
    </div>


    </>
  );
}

export default App;
