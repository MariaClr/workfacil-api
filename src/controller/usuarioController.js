import  { listarUsuarios, buscarUsuarioPorId, buscarCandidatoPorUsuario, buscarEmpresaPorUsuario, fazerLogin, recuperacaoSenha}from "../service/usuarioService.js";

async function usuarioLogin(req, res, next) {
    try{
        const  {email, senha} = req.body
        const token = await fazerLogin(email, senha)
        return res.status(200).json( {message: "usuario logado com sucesso", token: token} );
    }catch(error){
        next(error)
    }
    
}

async function usuarioListagem(req, res, next){
    try {
        const usuarios = await listarUsuarios()
        return res.send(usuarios);
    } catch (error) {
        next(error)

    }
}



async function listarUsuarioPorId(req, res, next) {
    try{
        const usuarioAutenticado = req.usuarioAutenticado

        const id = req.params.id;
        const result =await buscarUsuarioPorId(id, usuarioAutenticado);
        return res.status(200).json(result)
    }catch(error){
        next(error)
    }
    
}

async  function listarCandidatoPorUsuario(req, res, next){
    try{
        const usuarioAutenticado = req.usuarioAutenticado

        const id = req.params.id;
        const result = await buscarCandidatoPorUsuario(id, usuarioAutenticado);
        return res.status(200).json(result);
    }catch(error){
        next(error);
    }

}

async function listarEmpresaPorUsuario(req, res, next){
    try{

        const id = req.params.id;
        const result = await buscarEmpresaPorUsuario(id);
        return res.status(200).json(result);
    }catch(error){
        next(error)
    }


}

async function recuperarSenha(req, res, next){
    try{
       const email =  req.body.email
       const result = await recuperacaoSenha(email);
       return res.status(200).json("email para recuperar senha enviado");

    }catch(error){
        next(error)
    }
}




export { usuarioListagem, listarUsuarioPorId, listarCandidatoPorUsuario, listarEmpresaPorUsuario, usuarioLogin, recuperarSenha};