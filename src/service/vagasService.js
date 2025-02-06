import { ErroGeral } from "../error/errorPesonalizado.js";
import Empresa from "../model/empresa.js";
import Vaga from "../model/vagas.js";
import { Op } from "sequelize";

async function listarVagas(){
    const dataAtual = new Date().toISOString().split("T")[0];
    console.log(dataAtual)
    const listaVagas = await Vaga.findAll({
        where:{
            ativo: true,
            dataVencimento: {
                [Op.gte]: dataAtual
            }
          
        }
    });
    console.log(listaVagas)
    return listaVagas;
}


async function cadastrarVaga(vaga) {
    const empresa = await Empresa.findOne({
        where:{
            id: vaga.empresaId,
            ativo: true
        }
    });
    const empresaId = vaga.empresaId
    console.log(empresaId)


    if(empresa === null){


        throw new ErroGeral("empresa não encontrada", 404);
    }
    const novaVaga = await Vaga.create({
        ...vaga,
        empresaId
        
    }) 
    return novaVaga;
    
}

async function removerVaga(id, usuarioAutenticado) {
    const vaga = await Vaga.findByPk(id);
    if(vaga === null){
        throw new ErroGeral("vaga não encontrada", 400)
    }
    if(vaga.empresaId !== usuarioAutenticado.id){
        throw new ErroGeral("não possui permissao ", 401)
    }
    vaga.ativo = false;
    const vagaRemovida = vaga;
    await vaga.save();
    return vagaRemovida;
}


async function atualizarVaga(id, dataVencimento, descricao, area, usuarioAutenticado) {
    const vaga = await Vaga.findByPk(id);
    if (vaga === null) {
        throw new ErroGeral("Vaga não encontrada", 400);
    }
    if(vaga.empresaId !== usuarioAutenticado.id){
        throw new ErroGeral("não possui permissao ", 401)
    }
    if (dataVencimento && dataVencimento.trim() !== "") {
        vaga.dataVencimento = dataVencimento;
    }
    if (descricao && descricao.trim() !== "") {
        vaga.descricao = descricao;
    }
    if (area && area.trim() !== "") {
        vaga.area = area;
    }

    await vaga.save();
    return vaga;
}

export {listarVagas, cadastrarVaga, removerVaga, atualizarVaga};