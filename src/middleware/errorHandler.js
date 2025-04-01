import { ErroGeral } from "../error/errorPesonalizado.js";
import { Sequelize } from "sequelize";
function errorHandler(err, req, res, next){

    console.log("entrou aqui")
        if (err instanceof ErroGeral) {
            console.log("entrou aqui")

            return res.status(err.status).json({
                
                mensagem: err.message,
                status: err.status
            });
        };
        if (err instanceof Sequelize.ValidationError) {
            return res.status(400).json({
                mensagem: 'Erro de validação',
                detalhes: err.errors.map(e => e.message)
            });
        }
    
        if (err instanceof Sequelize.DatabaseError) {
            return res.status(500).json({
                mensagem: 'Erro de banco de dados',
                detalhes: err.message
            });
        }
    
        if (err instanceof Sequelize.UniqueConstraintError) {
            return res.status(400).json({
                mensagem: 'Valor duplicado encontrado',
                detalhes: err.errors.map(e => e.message)
            });
        }
    

    
        if (err instanceof Sequelize.TimeoutError) {
            return res.status(504).json({
                mensagem: 'Operação demorou demais (timeout)',
                detalhes: err.message
            });
        }

    
        if (err instanceof TypeError) {
            return res.status(400).json({
                mensagem: 'Erro de tipo',
                detalhes: err.message
            });
        }
    
        if (err instanceof ReferenceError) {
            return res.status(400).json({
                mensagem: 'Erro de referência',
                detalhes: err.message
            });
        }
    
        if (err instanceof SyntaxError) {
            return res.status(400).json({
                mensagem: 'Erro de sintaxe',
                detalhes: err.message
            });
        }

    
        return res.status(500).json({
            mensagem: 'Erro interno no servidor',
            detalhes: err.message || 'Erro desconhecido'
        });
};

export default errorHandler;
