export function verificaPermissao(...tiposPermitidos) {
    return (req, res, next) => {
       
        console.log(req.usuarioAutenticado.email)
        if (!req.usuarioAutenticado || !req.usuarioAutenticado.perfil) {
            console.log("negado")
            return res.status(401).json({ mensagem: "Usuário não autenticado!" });
        }

        const tipoUsuario = req.usuario.perfil;

        if (!tiposPermitidos.includes(tipoUsuario)) {
            return res.status(403).json({
                mensagem: "Usuário não possui a permissão necessária",
            });
        }

        next();
    };
}
