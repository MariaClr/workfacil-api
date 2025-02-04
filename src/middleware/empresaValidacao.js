import validaCnpj from "../service/validarCnpj.js";
function empresaCadastroValidacao(req, res, next) {
   const { cnpj, nomeEmpresa, numeroContato, endereco } = req.body;

   if (!endereco || endereco.trim() === "") {
       return res.status(400).json({ message: "Endereço obrigatório" });
   }

   if (!numeroContato || numeroContato.trim() === "") {
       return res.status(400).json({ message: "Número de contato obrigatório" });
   }

   if (!nomeEmpresa || nomeEmpresa.trim() === "") {
       return res.status(400).json({ message: "Nome da empresa obrigatório" });
   }

   if (!validaCnpj(cnpj) || !cnpj || cnpj.trim() === "") {
       return res.status(400).json({ message: "Campo precisa de um CNPJ válido" });
   }

   next();
}


export {empresaCadastroValidacao}