import React, {Component} from "react";




class Funcionario extends Component{
    constructor(props){
        super(props)
        this.nome = "João"
    }
    state = {
        cargo: "Técnico",
        turno: "Noite"
    }
    mudarTurno(){
        this.setState({turno:(this.state.turno == "Noite"?"Manhã":"Noite")})
    }
    componentDidMount(){
        console.log("Acabei de ser criado")
    }
    componentDidUpdate(){
        console.log("Acabei de atualizar")
    }
    componentWillUnmount(){
        console.log("Me tiraram")
    }
    
    render(){
       
        return(
            <>
            <p>Funcionario: {this.nome}</p>
            <p>Cargo: {this.state.cargo}</p>
            <p>Turno: {this.state.turno}</p>
            <button onClick={()=>this.mudarTurno()}>Rodar</button>
            
            </>
        )
    }
}
export default Funcionario;