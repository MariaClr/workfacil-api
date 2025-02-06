import { Router } from "express";
import { removerCandidatoPorId, atualizarDadosCandidato, cadastrarNovoCandidato, listarTodosCandidatos, buscarCandidatoPorId } from "../controller/candidatoController.js"
import errorHandler from "../middleware/errorhandler.js";

import { candidatoCadastroValidacao } from "../middleware/candidatoValidacoes.js";
import { validaCadastroUsuario } from "../middleware/usuarioValidacao.js";
import { validarToken } from "../token/token.js";
import { verificaPermissao } from "../security/permissoes.js";
const router = Router()

router.get("/", validarToken, verificaPermissao("admin"), listarTodosCandidatos, errorHandler);
router.post("/", candidatoCadastroValidacao, validaCadastroUsuario, cadastrarNovoCandidato, errorHandler);
router.put("/", validarToken, verificaPermissao("candidato", "admin","empresa"), atualizarDadosCandidato,errorHandler);
router.delete("/", validarToken, verificaPermissao("candidato", "admin", "empresa"), removerCandidatoPorId,errorHandler);
router.get("/:id", validarToken, verificaPermissao("candidato", "admin", "empresa"), buscarCandidatoPorId,errorHandler )

export {router};