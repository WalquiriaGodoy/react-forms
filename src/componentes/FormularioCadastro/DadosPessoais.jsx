import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel} from '@material-ui/core';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({aoEnviar}){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form
            onSubmit={(evento)=> {
                evento.preventDefault();
                if (possoEnviar()){
                    aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
                }
            }}
        >
            <TextField 
                value={nome}
                onChange={(evento)=>{
                    setNome(evento.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id='nome'
                name='nome'
                label='Nome' 
                variant="outlined" 
                margin='normal' 
                fullWidth
            />

            <TextField 
                value={sobrenome}
                onChange={(evento)=>{
                    setSobrenome(evento.target.value)
                }}
                id='sobrenome'
                name='sobrenome'
                label='Sobrenome' 
                variant="outlined" 
                margin='normal' 
                fullWidth
            />

            <TextField 
                value={cpf}
                onChange={(evento)=>{
                    setCpf(evento.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id='cpf' 
                name='cpf'
                label='CPF' 
                variant="outlined" 
                margin='normal' 
                fullWidth
            />

            <FormControlLabel 
                label='Promoções' 
                control={
                    <Switch 
                        checked={promocoes}
                        onChange={(evento)=>{
                            setPromocoes(evento.target.checked);
                        }}
                        name="Promoções" color='primary'
                    />
                }
            />

            <FormControlLabel 
                label='Novidades' 
                control={
                    <Switch 
                        checked={novidades}
                        onChange={(evento)=>{
                            setNovidades(evento.target.checked);
                        }}
                        name="Novidades" color='primary'
                    />
                }
            />

            <Button 
                type='submit' 
                variant="contained" 
                color="primary">
                Próximo
            </Button>

        </form>
    )
}

export default DadosPessoais;