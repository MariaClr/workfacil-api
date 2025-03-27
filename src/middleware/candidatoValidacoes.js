import validarCpf from "../service/validaCpf.js";
export function candidatoCadastroValidacao(req, res, next){
    const candidato = {nome: req.body.nome,
        cpf: req.body.cpf,
        numeroContato : req.body.numeroContato,
        endereco: req.body.endereco
    };

    const result = Object.entries(candidato).filter(([entrada, valor])=> { return !valor || valor.trim() === "" })
    const camposInvalidos = result.map(c => c[0])

    if(result.length > 0){
        return res.status(400).send(`Campos obrigatórios faltando: ${camposInvalidos.join("- ")}`);

    }
    if(candidato.cpf.length !== 11){
        return res.status(400).send("O CPF deve ter exatamente 11 dígitos.");
    };
    if ( !validarCpf(candidato.cpf)) {
        return res.status(400).json( 'CPF inválido' );
    }
    next()
};




