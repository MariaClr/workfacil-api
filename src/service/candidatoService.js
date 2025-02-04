import Candidato from "../model/candidato.js"
import Usuario from "../model/usuario.js";
import db from "../db/db.js";
import { ErroGeral } from "../error/errorPesonalizado.js";
import { gerarSenhaCriptografada } from "../security/criptografia.js";


export async function listarCandidatos(){
    try{
        const candidatos = await Candidato.findAll();
        return candidatos;
    }catch(erro){
        throw erro
    };
};


export async function cadastrarCandidato(candidato) {
    const t = await db.transaction(); // Inicia a transação
    candidato.senha = await gerarSenhaCriptografada(candidato.senha);
    console.log(candidato.senha);



    try {
        const usuario = await Usuario.create({
            tipoUsuario: "candidato",
            ...candidato
        }, { transaction: t }); 

  
        const novoCandidato = await Candidato.create({
            id: usuario.id, 
            ...candidato,
            usuarioId: usuario.id
        }, { transaction: t }); 
      
        await t.commit(); 

        return novoCandidato;

    } catch (error) {
      
        await t.rollback(); 
        throw error; 
    }
};



export async function atualizarCandidato(id, numeroContato, endereco){

    const candidato = await Candidato.findByPk(id);
    if(candidato === null){
        throw new Error("candidato nao encontrado")
    }
    if(numeroContato !== null && numeroContato.trim() !== ""){
        candidato.numeroContato = numeroContato;
    } ;
    if(endereco !== null && endereco.trim() !== ""){
        candidato.endereco = endereco;
    };
    candidato.save();
    return candidato;
};

export async function removerCandidato(id) {
    const t = await db.transaction(); 
    try {
        const candidato = await Candidato.findOne({
            where:{
                id: id,
                ativo:true,
                tipoUsuario: "candidato"
            }, include: {
                model: Usuario

            }
        });
        if(candidato === null){
                throw new ErroGeral("candidato nao encontrado", 400)
        }
        if(candidato.usuario === null){
            throw new ErroGeral("perfil de usuario pra candidato nao encontrado", 400)
        }

        candidato.ativo = false;
        candidato.usuario.ativo = false


        await candidato.save({transaction: t});
        await candidato.usuario.save({transaction: t});
      

    }catch(erro){

        await t.rollback();
        throw(erro)
    }
    
}

export async function listarCandidatoPorId(id) {
    if(!id){throw new ErroGeral("id obrigatorio", 400)}


    const candidato = await Candidato.findOne({
        where:{
            id: id,
            ativo: true
        }
    });


    if(!candidato){
        throw new ErroGeral("candidato nao encontrado", 404)}

    return candidato;
    
}