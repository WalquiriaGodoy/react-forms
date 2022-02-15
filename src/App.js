import React, { Component, Fragment } from 'react/cjs/react.production.min';
import './App.css';
import FormularioCadastro from './componentes/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render(){

    return (
      <Fragment>
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro/>
      </Fragment>
    );
  }
}

export default App;
