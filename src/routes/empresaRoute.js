import { Router } from 'express';
import { listarEmpresas, cadastrarEmpresa, exclusaoEmpresa, atualizarEmpresa } from '../controller/empresa.js';
import { empresaCadastroValidacao } from '../middleware/empresaValidacao.js';
import { validaCadastroUsuario } from '../middleware/usuarioValidacao.js';
import { validarToken } from '../token/token.js';
import { verificaPermissao } from '../security/permissoes.js';
import errorHandler from '../middleware/errorhandler.js';

const router = Router();

router.get('/', validarToken, verificaPermissao("admin"), listarEmpresas,errorHandler);
router.post('/',empresaCadastroValidacao, validaCadastroUsuario, cadastrarEmpresa, errorHandler);
router.delete('/:id', validarToken,verificaPermissao("admin", "empresa"), exclusaoEmpresa,errorHandler);
router.put('/', validarToken, verificaPermissao("admin", "empresa"), atualizarEmpresa,errorHandler);

export { router };  
