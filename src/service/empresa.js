import Empresa from "../model/empresa.js";
import Usuario from "../model/usuario.js";
import db from "../db/db.js";
import { ErroGeral } from "../error/errorPesonalizado.js";

export async function cadastroEmpresa(empresa) {
    const transaction = await db.transaction();
    empresa.senha = await gerarSenhaCriptografada(empresa.senha);
    console.log(empresa.senha);

    try {
        const usuario = await Usuario.create(
            { tipoUsuario: "empresa", ...empresa },
            { transaction }
        );

        const novaEmpresa = await Empresa.create(
            { id: usuario.id, ...empresa, usuarioId: usuario.id },
            { transaction }
        );

        await transaction.commit();
        return novaEmpresa;
    } catch (erro) {
        await transaction.rollback();
        throw erro;
    }
}


export async function  listarEmpresa() {
  
        const listaEmpresas = await Empresa.findAll({
            where:{
               ativo: true 
            }
        })
        return listaEmpresas;

    
};

export async function removerEmpresa(id){
    const t = await db.transaction(); 
 
    try{
        const empresaRemovida = await Empresa.findOne({
            where: {
                id: id,
                ativo:true,
                tipoUsuario: "empresa"
            }, include:{
                model: Usuario
            }
        });

        if(!empresaRemovida){
            throw new ErroGeral("empresa nao encontrada", 400);
        }
         if(!empresaRemovida.usuario){
            throw new ErroGeral("nenhum usuario para esse id da empresa  encontrado", 400);
         }

        empresaRemovida.ativo = false;
        empresaRemovida.usuario.ativo = false;

        await empresaRemovida.save({
            transaction: t });

        await empresaRemovida.usuario.save({
            transaction: t})

        
    }
    catch(erro){
        await t.rollback();
        throw(erro)
    }
};

export async function empresaAtualizar(id, endereco, numeroContato) {
   
        const empresaParaAtualizar = await Empresa.findByPk(id);
        if(!empresaParaAtualizar){
            throw new ErroGeral("empresa com id fornecido nao encontrada", 400);
        }
        if(!(endereco=== null) && !(endereco.trim() === "")){
            empresaAtualizar.endereco = endereco;
        }
        if(!(numeroContato === null) && !(numeroContato.trim() === "")){
            empresaAtualizar.numeroContato = numeroContato;
        }
        await empresaAtualizar.save()
        return empresaParaAtualizar;
   

};