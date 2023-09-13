'use client'
import React, {useState} from "react"
import PrimeiraClasse from "./PrimeiraClasse"
import Funcionario from "./Funcionario"


export default function Home() {
  const [classe,setClasse] = useState(false);
  const criarClase = ()=>{
      setClasse(!classe)
  }
  return (
    <>
    <PrimeiraClasse msg='Agora mudou um pouco'/>
    <Funcionario/>
    
    <button onClick={()=>criarClase()}></button>
    {classe == true ? "Remover classe" : "Criar classe"}
    </>
    
  )
}
