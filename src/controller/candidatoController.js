import { removerCandidato, atualizarCandidato, cadastrarCandidato, listarCandidatos, listarCandidatoPorId } from "../service/candidatoService.js";

export const listarTodosCandidatos = async (req, res, next) => {
    try {
        const candidatos = await listarCandidatos();
        return res.status(200).json(candidatos);
    } catch (erro) {
        next(erro);
    }
};

export const cadastrarNovoCandidato = async (req, res, next) => {
    try {
        const novoCandidato = await cadastrarCandidato(req.body);
        return res.status(201).json(novoCandidato);
    } catch (erro) {
        next(erro);
    }
};

export const atualizarDadosCandidato = async (req, res, next) => {
    try {
        const usuarioAutenticado = req.usuario;
        const { id, numeroContato, endereco } = req.body;
        const candidatoAtualizado = await atualizarCandidato(id, numeroContato, endereco, usuarioAutenticado);
        return res.status(200).json(candidatoAtualizado);
    } catch (erro) {
        next(erro);
    }
};

export const removerCandidatoPorId = async (req, res, next) => {
    try {
        const usuarioAutenticado = req.usuario;
        await removerCandidato(req.params.id, usuarioAutenticado);
        return res.status(204).send();
    } catch (erro) {
        next(erro);
    }
};

export const buscarCandidatoPorId = async (req, res, next) => {
    try {
        const usuarioAutenticado = req.usuario;
        const candidato = await listarCandidatoPorId(req.params.id, usuarioAutenticado);
        return res.status(200).json(candidato);
    } catch (erro) {
        next(erro);
    }
};
