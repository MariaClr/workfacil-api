import Usuario from "../model/usuario.js";
import { ErroGeral } from "../error/errorPesonalizado.js";
import Empresa from "../model/empresa.js";
import { compararSenha } from "../security/criptografia.js";
import { gerarToken } from "../token/token.js";


async function fazerLogin(email, senha) {
    console.log(email, senha)
    const usuario = await Usuario.findOne({ 
        where: {
            email: email,
            ativo: true
        }
    });
    console.log(usuario)

    if (!usuario) {
        throw new ErroGeral("Usuário não encontrado", 404);
    }

    const senhaComparada = await compararSenha(senha, usuario.senha);

    if (!senhaComparada) {
        throw new ErroGeral("Senha incorreta", 401);
    }

    const token = gerarToken(usuario);
    console.log(token)

    return token;
}


async function listarUsuarios() {
    const usuarios = await Usuario.findAll();
    return usuarios;
}



async function buscarUsuarioPorId(id, usuarioAutenticado) {
    if(!id){
        throw new ErroGeral("id valido nao fornecido", 400 );
    }
    if(usuarioAutenticado.id !== id){
        throw new ErroGeral("não possui permissão", 401 );
    }
    const usuario = await Usuario.findOne({
        where:{
            id: id,
            ativo: true
        }
    });
    if(!usuario){
        throw new ErroGeral("usuario nao encontrado", 404);
    }

    return usuario;
}


async function buscarCandidatoPorUsuario(id, usuarioAutenticado) {
    if(!id){
        throw new ErroGeral("id valido nao fornecido", 400 );
    } 

    if(usuarioAutenticado.id !== id){
        throw new ErroGeral("não possui permissão", 401 );
    }
     const usuario = await Usuario.findOne({
        where:{
            id: id,
            ativo: true,
            tipoUsuario: "candidato"
        }
    });
    if(!usuario){
        throw new ErroGeral("usuario nao encontrado", 404);
    }

    return usuario;

}

async function buscarEmpresaPorUsuario(id) {
    if(!id){
        throw new ErroGeral("id valido nao fornecido", 400 );
    } 
     const usuario = await Empresa.findOne({
        where:{
            id: id,
            ativo: true,
            tipoUsuario: "candidato"
        }
    });
    if(!usuario){
        throw new ErroGeral("Empresa nao encontrada", 404);
    }

    return usuario;

}
    
    

export { listarUsuarios, buscarUsuarioPorId, buscarEmpresaPorUsuario, buscarCandidatoPorUsuario, fazerLogin}
