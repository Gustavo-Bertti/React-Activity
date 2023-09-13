import React, {useState} from 'react';
import TesteState from './assets/TesteSate';



function App() {
  
  const[aluno,setAluno] = useState('João');

  return (
    <>
    
      <p>Aluno: {aluno}</p>
      <button onClick={()=>setAluno('Maria')}>Mudar</button>
      <TesteState/>
     
    </>
  )
}

export default App
