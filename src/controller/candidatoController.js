import {removerCandidato, atualizarCandidato, cadastrarCandidato, listarCandidatos, listarCandidatoPorId} from "../service/candidatoService.js"

export const candidatoListagem = async (req, res , next) => {
    try{
        const listaCandidatos = await listarCandidatos();
        return res.status(200).json(listaCandidatos);
    }
    catch(error){
        next(error)
    }
}


export const candidatoCadastro = async (req, res , next) => {
    try{
        const cadastro = await cadastrarCandidato(req.body);
        return res.status(201).json(cadastro);
    }
    catch(error){
        next(error)
    }
}

export const candidatoAtualizacao = async (req, res , next) => {
    try{

        const usuarioAutenticado = req.usuario;
        const usuario = req.body
        const candidatoAtualizado = atualizarCandidato(usuario.id, usuario.numeroContato, usuario.endereco, usuarioAutenticado);
        return res.status(200).json(candidatoAtualizado);
    }
    catch(error){
        next(error)
    }
}


export const candidatoRemover = async (req, res , next) => {
    try{
        const usuarioAutenticado = req.usuario
        removerCandidato(req.id, usuarioAutenticado)
        return res.status(204)
    }
    catch(error){
        next(error)
    }
}


export const candidatoIdListar = async (req, res , next) => {
    try{
        const usuarioAutenticado = req.usuario

       const candidato =  await listarCandidatoPorId(req.params.id, usuarioAutenticado)
        return res.status(200).send(candidato)
    }
    catch(error){
        next(error)
    }
}