import { listarVagas, cadastrarVaga, removerVaga, atualizarVaga } from "../service/vagasService.js";

export async function cadastroVaga(req,res,next){
    try{
        const vaga = req.body;
        const vagaCadastrada = await cadastrarVaga(vaga);
        return res.send(vagaCadastrada);
    }catch(error){
        next(error)
          }
}


export async function listagemVagas(req, res, next) {
    try{
        const vagas = await listarVagas();
        return res.send(vagas);
    }catch(error){
        next(error)
    }
    
};

export async function remocaoVaga(req, res, next) {
    try{
        const id = req.params.id;
        const vagaRemovida =  await removerVaga(id)
        return res.send(vagaRemovida);

    }catch(error){
        next(error)

    };
}

export async function atualizacaoVaga(req, res, next) {
    try{
        const {id, dataVencimento, descricao, area} = req.body;
        const vagaAtualizada = await atualizarVaga(id, dataVencimento, descricao, area);
        return res.send(vagaAtualizada);

    }catch(error){
        next(error)
    }
};

