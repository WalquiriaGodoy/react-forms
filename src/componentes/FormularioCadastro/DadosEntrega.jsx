import {Button, TextField} from "@material-ui/core";
import { useState } from "react";

function DadosEntrega({aoEnviar}){
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return(
        <form
            onSubmit={
                (evento)=>{
                    evento.preventDefault();
                    aoEnviar({cep, endereco, numero, estado, cidade})
                }
            }>

            <TextField 
                value={cep}
                onChange={(evento)=>{
                    setCep(evento.target.value);
                }}
                id="cep" 
                label="CEP" 
                type="number"
                variant="outlined" 
                margin='normal' 
                fullWidth
            />

            <TextField 
                value={endereco}
                onChange={(evento)=>{
                    setEndereco(evento.target.value);
                }}
                id="endereco" 
                label="Endereço" 
                type="text"
                variant="outlined" 
                margin='normal' 
                fullWidth
            />
            
            <TextField 
                value={numero}
                onChange={(evento)=>{
                    setNumero(evento.target.value);
                }}
                id="numero" 
                label="Número" 
                type="number"
                variant="outlined" 
                margin='normal'
            />

            <TextField 
                value={estado}
                onChange={(evento)=>{
                    setEstado(evento.target.value);
                }}
                id="estado" 
                label="Estado" 
                type="text"
                variant="outlined" 
                margin='normal'
            />


            <TextField 
                value={cidade}
                onChange={(evento)=>{
                    setCidade(evento.target.value);
                }}
                id="cidade" 
                label="Cidade" 
                type="text"
                variant="outlined" 
                margin='normal' 
            />
            <Button
            type='submit' 
            variant="contained" 
            color="primary"
            fullWidth>
            Finalizar Cadastro
            </Button>

        </form>
    );
}

export default DadosEntrega;