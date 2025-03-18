import { Router } from "express";
import { cadastroVaga, listagemVagas, remocaoVaga, atualizacaoVaga} from "../controller/vagasController.js";
import { validarVaga } from "../middleware/vagaValidacao.js";
import { validarToken } from "../token/token.js";
import { verificaPermissao } from "../security/permissoes.js";
import errorHandler from "../middleware/errorhandler.js";
const router = Router();

router.get("/", listagemVagas, errorHandler)
router.post("/",validarToken, verificaPermissao("admin", "empresa"), validarVaga, cadastroVaga, errorHandler)
router.put("/", validarToken, verificaPermissao("admin", "empresa"), atualizacaoVaga,errorHandler )
router.delete("/:id", validarToken, verificaPermissao("admin", "empresa"), remocaoVaga, errorHandler)

export  {router};
