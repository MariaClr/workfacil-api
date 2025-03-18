import { Router } from "express";
import {usuarioListagem, usuarioLogin, listarUsuarioPorId, listarCandidatoPorUsuario, listarEmpresaPorUsuario, recuperarSenha } from "../controller/usuarioController.js"
import { validarToken } from "../token/token.js";
import { verificaPermissao } from "../security/permissoes.js";
import errorHandler from "../middleware/errorhandler.js";

const router = Router();

router.get("/",  validarToken , verificaPermissao("admin"), usuarioListagem,errorHandler);
router.get("/:id", validarToken, listarUsuarioPorId,errorHandler);
router.get("/:id/candidato",validarToken,verificaPermissao("admin", "candidato"), listarCandidatoPorUsuario,errorHandler);
router.get("/:id/empresa", validarToken, verificaPermissao("admin", "empresa"), listarEmpresaPorUsuario,errorHandler);
router.post("/", usuarioLogin);
router.post("/recuperarSenha", recuperarSenha, errorHandler)






export {router};