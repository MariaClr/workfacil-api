import dotenv from "dotenv";
import express from "express";
import "./conf/relacoes.js"
import {router as empresaRoute} from "./routes/empresaRoute.js"
import { router  as candidatoRoute} from "./routes/candidatoRoute.js";
import {router as vagasRoute} from "./routes/vagasRoute.js"
import { router as usuarioRoute } from "./routes/usuarioRoute.js";

dotenv.config();


const app = express();
const porta = process.env.PORTA;



app.use(express.json());

app.use("/empresas", empresaRoute);
app.use("/candidato", candidatoRoute);
app.use("/vaga", vagasRoute);
app.use("/usuario", usuarioRoute);




app.listen(3000, ()=>{
    console.log("ouvindo porta: " + porta)
})
