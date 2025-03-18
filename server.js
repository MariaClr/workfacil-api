import dotenv from "dotenv";
import express from "express";
import "./src/conf/relacoes.js"
import {router as empresaRoute} from "./src/routes/empresaRoute.js"
import { router  as candidatoRoute} from "./src/routes/candidatoRoute.js";
import {router as vagasRoute} from "./src/routes/vagasRoute.js"
import { router as usuarioRoute } from "./src/routes/usuarioRoute.js";

dotenv.config();


const app = express();
const porta = process.env.PORTA;





app.use(express.json());

app.use("/empresas", empresaRoute);
app.use("/candidato", candidatoRoute);
app.use("/vaga", vagasRoute);
app.use("/usuario", usuarioRoute);




app.listen(porta, ()=>{
    console.log("ouvindo porta: " + porta)
})
