import jwt from "jsonwebtoken"
const secret = process.env.SECRETTOKEN

function gerarToken(usuario){
    const token = jwt.sign({usuarioId: usuario.id, email: usuario.email, perfil: usuario.tipoUsuario}, secret, {
            expiresIn: "1h"});

    return token;
}

async function validarToken(req, res, next){
    const tokenAuth = req.headers.authorization;

    if(!tokenAuth){
        return res.status(401).json("acesso negado");
    }

    const token = tokenAuth.split(" ")[1]
    console.log(token)
    
    try {
        const decoded = await jwt.verify(token, secret);

        req.usuarioAutenticado = decoded;
        console.log(decoded);

        next();

    } catch (err) {
        return res.status(403).json({ message: 'Token inválido ou expirado as' });
    }

}

export {validarToken, gerarToken};