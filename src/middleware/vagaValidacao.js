function validarVaga(req, res, next) {
    console.log("chegou aqui")
    console.log(req.body)
    const vaga = req.body;

    const result = Object.entries(vaga).filter(([campo, valor]) => !valor || toString(valor).trim() === "");
    const campos = result.map(r => r[0]);

    if (campos.length > 0) {
        return res.status(400).json({ message: `Campos obrigatórios: ${campos.join(", ")}` });
    }

    const dataFornecida = new Date(vaga.dataVencimento);
    const dataAtual = new Date();
    if (dataFornecida < dataAtual) {
        return res.status(400).send("Data de vencimento não pode ser anterior à data atual");
    }

    if (vaga.descricao && vaga.descricao.length < 100) {
        return res.status(400).send("A descrição precisa ter no mínimo 100 caracteres");
    }

    if (!vaga.empresaId) {
        return res.status(400).send("ID da empresa é obrigatório");
    }

    next();
}


function validarAtualizacaoVaga(req, res, next){
    if (!req.body.id) {
        return res.status(400).json("id é necessario");
    };
    if(vaga.descricao.length < 100){
        return res.status(400).send("a descricao precisa ter no minimo 100 caracteres")
    };
    const dataFornecida = new Date(req.body.dataVencimento)
    const dataAtual = new Date()
    if(dataFornecida < dataAtual){
        return res.status(400).send("data de vencimento não aceita")
    };
    next();

}

export {validarAtualizacaoVaga, validarVaga};