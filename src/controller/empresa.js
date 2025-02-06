import { cadastroEmpresa, listarEmpresa, removerEmpresa, empresaAtualizar } from "../service/empresa.js"

export async function cadastrarEmpresa(req, res, next){
   const  novaEmpresa = req.body
    console.log(novaEmpresa)
    try {
        const cadastro = await cadastroEmpresa(novaEmpresa);
        return res.send(cadastro)
    }
    catch(error){
        next(error)
    }

};

export async function listarEmpresas(req, res, next){

    try {
         const listaEmpresas = await listarEmpresa();
        return res.send(listaEmpresas)
    }
    catch(error){
        next(error)
    }

};

export async function exclusaoEmpresa(req, res, next) {
    try{

        const usuarioAutenticado = req.usuarioAutenticado
        const id = req.params;
        const empresaRemovida = await removerEmpresa(id, usuarioAutenticado);
        return res.send("empresa removida")

    }catch(error){
        next(error)
    }
    
};

export async function atualizarEmpresa(req, res, next){
    try{
        const usuarioAutenticado = req.usuarioAutenticado
        const {id, endereco, numeroContato} = req.body;
        const empresaAtualizada = empresaAtualizar(id, endereco, numeroContato, usuarioAutenticado);
        return res.send(empresaAtualizada)
    }catch(error){
        next(error)
    }
}