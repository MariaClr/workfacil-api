import { Router } from "express";
import { cadastroVaga, listagemVagas, remocaoVaga, atualizacaoVaga} from "../controller/vagasController.js";
import { validarVaga } from "../middleware/vagaValidacao.js";
import { validarToken } from "../token/token.js";
import { verificaPermissao } from "../security/permissoes.js";
import errorHandler from "../middleware/errorhandler.js";
import Vaga from "../model/vagas.js";
import Empresa from "../model/empresa.js";
import { Op } from "sequelize";
import Usuario from "../model/usuario.js";


const router = Router();
const dataAtual = new Date().toISOString().split("T")[0];


router.get("/", listagemVagas, errorHandler)
router.get("/filtro/:area", validarToken, async (req, res, next)=> {
    try{ const vagas = await Vaga.findAll({
          where:{
                    ativo: true,
                    dataVencimento: {
                        [Op.gte]: dataAtual,
                    },
                    area: req.params.area
                  
                },
         include: [
             {
                 model: Empresa,
                  include: [
                    {
                      model: Usuario, 
                    }],
         
             }
         ]
     });
     console.log(vagas)
    return  res.status(200).json(vagas)
 }catch(error){
     next(error)
    }
 })
router.get("/:empresaId", validarToken,  async (req, res, next)=> {
   try{ const vagas = await Vaga.findAll({
         where:{
                   ativo: true,
                   dataVencimento: {
                       [Op.gte]: dataAtual,
                   },
                   empresaId: req.params.empresaId
                 
               },
        include: [
            {
                model: Empresa,
        
            }
        ]
    });
    console.log(vagas)
   return  res.status(200).json(vagas)
}catch(error){
    next(error)
   }
})
router.post("/", validarVaga, cadastroVaga, errorHandler)
router.put("/", validarToken, verificaPermissao("admin", "empresa"), atualizacaoVaga,errorHandler )
router.delete("/:id", validarToken, remocaoVaga, errorHandler)

export  {router};
