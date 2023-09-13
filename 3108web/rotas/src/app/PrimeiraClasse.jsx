import React, {Component} from "react";




class PrimeiraClasse extends Component{
    constructor(props){
        super(props)
    }
render(){
    return(
        <>
            <p>Primeira Classe</p>
            <p>Mensagem: {this.props.msg}</p>
        </>
    )

}
}
export default PrimeiraClasse;