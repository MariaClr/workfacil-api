import { Router } from "express";
import {
    candidatoRemover,
    candidatoAtualizacao,
    candidatoCadastro,
    candidatoListagem,
    candidatoIdListar

} from "../controller/candidatoController.js"
import errorHandler from "../middleware/errorhandler.js";

import { candidatoCadastroValidacao } from "../middleware/candidatoValidacoes.js";
import { validaCadastroUsuario } from "../middleware/usuarioValidacao.js";
import { validarToken } from "../token/token.js";
import { verificaPermissao } from "../security/permissoes.js";
const router = Router()

router.get("/", validarToken, verificaPermissao("admin"), candidatoListagem, errorHandler);
router.post("/", candidatoCadastroValidacao, validaCadastroUsuario, candidatoCadastro, errorHandler);
router.put("/", validarToken, verificaPermissao("candidato", "admin","empresa"), candidatoAtualizacao,errorHandler);
router.delete("/", validarToken, verificaPermissao("candidato", "admin", "empresa"), candidatoRemover,errorHandler);
router.get("/:id", validarToken, verificaPermissao("candidato", "admin", "empresa"), candidatoIdListar,errorHandler )

export {router};