import React, {useState} from "react";
import TesteStateFilho from "./TesteStateFilho";

function TesteState(){
    const[valorState, setValorState] = useState(5);
    let valorVariavel = 5;
    function aumentar(){
        setValorState(valorState + 5);
        valorVariavel +=5;
    }
return(
    <>
    <p>ValorState: {valorState}</p>
    <p>ValorVariavel: {valorVariavel}</p>
    <button onClick={()=>aumentar()}>Aumentar</button>
    <TesteStateFilho valor={valorState} aumentar={aumentar}/>
    </>
);
}

export default TesteState;