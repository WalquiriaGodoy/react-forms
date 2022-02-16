import React, { Component } from 'react/cjs/react.production.min';
import './App.css';
import FormularioCadastro from './componentes/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant='h3' component="h1" align='center'>Formulário de Cadastro</Typography>
        <FormularioCadastro/>
      </Container>
    );
  }
}

export default App;
