import bcrypt from 'bcryptjs'; 
import { ErroGeral } from '../error/errorPesonalizado.js';

async function gerarSenhaCriptografada(senha) {
    try{
        const senhaCriptografada = await bcrypt.hashSync(senha, 10);
        return senhaCriptografada
    }catch(error){
        throw new ErroGeral("Erro no servidor", 500);
    };
} 

async function compararSenha(senhaFornecida, senhaBanco) {
    const result = bcrypt.compare(senhaFornecida, senhaBanco);
    return result;
    
}

export {compararSenha, gerarSenhaCriptografada}
