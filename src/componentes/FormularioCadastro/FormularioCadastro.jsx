import React, { Component, useState } from 'react';
import { Button, TextField, Switch, FormControlLabel} from '@material-ui/core';

function FormularioCadastro(){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true)


    return(
        <form
            onSubmit={(evento)=> {
                evento.preventDefault(); 
                console.log({nome, sobrenome, cpf, promocoes, novidades});
                }}
        >
            <TextField 
                value={nome}
                onChange={(evento)=>{
                    setNome(evento.target.value);
                }}
                id='nome' 
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
                id='cpf' 
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

            <Button type='submit' variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;