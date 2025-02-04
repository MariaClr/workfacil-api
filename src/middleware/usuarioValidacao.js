function validaCadastroUsuario(req, res, next){
    const tipos = ["empresa", "candidato", "admin"]
    const usuario = req.body
    if(!usuario.senha || usuario.senha.trim() === "" || usuario.senha.length < 8){
        return res.status(400).send("senha obrigatoria e precisa ter no minimo 8 caracteres")
    };
    if(!usuario.email || usuario.email.trim() === "" ){
        return res.status(400).send("email é obrigatorio")
    };
  

    next();
}

export {validaCadastroUsuario}