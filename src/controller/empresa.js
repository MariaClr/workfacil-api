import { cadastroEmpresa, listarEmpresa, removerEmpresa, empresaAtualizar } from "../service/empresa.js"

export async function cadastrarEmpresa(req, res){
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

export async function listarEmpresas(req, res){

    try {
         const listaEmpresas = await listarEmpresa();
        return res.send(listaEmpresas)
    }
    catch(error){
        next(error)
    }

};

export async function exclusaoEmpresa(req, res) {
    try{
        const id = req.params;
        const empresaRemovida = await removerEmpresa(id);
        return res.send("empresa removida")

    }catch(error){
        next(error)
    }
    
};

export async function atualizarEmpresa(req, res){
    try{
        const {id, endereco, numeroContato} = req.body;
        const empresaAtualizada = empresaAtualizar(id, endereco, numeroContato);
        return res.send(empresaAtualizada)
    }catch(error){
        next(error)
    }
}