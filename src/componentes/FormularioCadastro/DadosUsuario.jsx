import {Button, TextField} from "@material-ui/core";
import { useState } from "react";

function DadosUsuario({aoEnviar}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return(
        <form onSubmit={(evento)=>{
            evento.preventDefault();
            aoEnviar({email, senha});
        }}>

            <TextField 
                value={email}
                onChange={(evento) => {
                    setEmail(evento.target.value);
                }}
                id="email" 
                label="email" 
                type="email"
                required
                variant="outlined" 
                margin='normal' 
                fullWidth/>

            <TextField 
                value={senha}
                onChange={(evento)=>{
                    setSenha(evento.target.value);
                }}
                id="senha" 
                label="senha" 
                type="password"
                required
                variant="outlined" 
                margin='normal' 
                fullWidth
                />

            <Button
            type='submit' 
            variant="contained" 
            color="primary">
            Cadastrar
            </Button>

        </form>
    );
}

export default DadosUsuario;