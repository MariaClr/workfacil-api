import { listarVagas, cadastrarVaga, removerVaga, atualizarVaga } from "../service/vagasService.js";

export async function cadastroVaga(req,res,next){
    try{
        console.log(req.body)
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
        return res.status(200).json(vagas)
    }catch(error){
        next(error)
    }
    
};

export async function remocaoVaga(req, res, next) {
    try{
        console.log(req.usuarioAutenticado.email + " adasdas")
        const usuarioAutenticado = req.usuarioAutenticado
        console.log(usuarioAutenticado)
        const id = req.params.id;
        const vagaRemovida =  await removerVaga(id, usuarioAutenticado)
        return res.send(vagaRemovida);

    }catch(error){
        next(error)

    };
}

export async function atualizacaoVaga(req, res, next) {
    try{
        const usuarioAutenticado = req.usuarioAutenticado
        const {id, dataVencimento, descricao, area} = req.body;
        const vagaAtualizada = await atualizarVaga(id, dataVencimento, descricao, area,usuarioAutenticado );
        return res.send(vagaAtualizada);

    }catch(error){
        next(error)
    }
};

