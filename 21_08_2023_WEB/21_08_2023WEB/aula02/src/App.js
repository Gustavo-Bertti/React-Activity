import React from "react";
import "./App.css"
import ComponenteTeste from "./componenteTeste"; 

export default function App(){
  let parag = {
    textAlign: 'center',
    color: 'red',
    fontSize: '2em'
  }
  return(
    <>
      <h1 class = 'seila'>Hello World</h1>
      <h2 style={{fontSize:'30px'}}>Conteudo do APP</h2>
      <p style= { parag } >Conteudo do paragrafo</p>
      <p className="seila">Conteudo do paragrafo 2</p>
      <ComponenteTeste />
    </>
  )
}