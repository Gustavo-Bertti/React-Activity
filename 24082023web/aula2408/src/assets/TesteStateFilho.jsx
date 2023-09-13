import React from "react";

function TesteStateFilho(props){
    return(
        <>
            <p>Valor de State no filho : {props.valor}</p>
            <button onClick={() => props.aumentar()}>Aumentar</button>
        </>
    )
}
export default TesteStateFilho;