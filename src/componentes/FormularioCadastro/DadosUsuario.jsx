import {Button, TextField} from "@material-ui/core";
import { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosUsuario({aoEnviar}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState( {senha: {valido:true, texto:""} })
    const validacoes = useContext(ValidacoesCadastro);

    function validarCampos(evento) {
        const {name, value} = evento.target;
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar(){
        for(let campo in erros){
            if(!erros[campo].valido){
                return false;
            }
        }
        return true;
    }

    return(
        <form onSubmit={(evento)=>{
            evento.preventDefault();
            if (possoEnviar()){
            aoEnviar({email, senha});
            }
        }}>

            <TextField 
                value={email}
                onChange={(evento) => {
                    setEmail(evento.target.value);
                }}
                id="email" 
                name="email"
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
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha" 
                name="senha"
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
            Próximo
            </Button>

        </form>
    );
}

export default DadosUsuario;