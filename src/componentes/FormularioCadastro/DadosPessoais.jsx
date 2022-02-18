import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel} from '@material-ui/core';

function DadosPessoais({aoEnviar, validarCPF}){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})


    return(
        <form
            onSubmit={(evento)=> {
                evento.preventDefault(); 
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
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

                onBlur={(evento)=> {
                    const ehValido = validarCPF(cpf)
                    setErros({cpf:ehValido})
                }}

                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
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

            <Button 
                type='submit' 
                variant="contained" 
                color="primary">
                Cadastrar
            </Button>

        </form>
    )
}

export default DadosPessoais;