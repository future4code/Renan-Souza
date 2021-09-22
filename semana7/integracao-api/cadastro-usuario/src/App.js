import React from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuarios from "./components/TelaListaUsuarios";

export default class App extends React.Component {
  state = {
    telAtual: "cadastro"
  }
  
  escolheTela = () => {
    switch (this.state.telAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada :( </div>
    }
  }

  irParaCadastro = () =>{
    this.setState({telAtual: "cadastro"})

  }

  irParaLista = () => {
    this.setState({telAtual:"lista"})
  }

    render (){
    return (
      <div>
       {this.escolheTela()}
      </div>
    )
  }
}


