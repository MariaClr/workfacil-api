import dotenv from "dotenv";
import express from "express";
import "./src/conf/relacoes.js"
import {router as empresaRoute} from "./src/routes/empresaRoute.js"
import { router  as candidatoRoute} from "./src/routes/candidatoRoute.js";
import {router as vagasRoute} from "./src/routes/vagasRoute.js"
import { router as usuarioRoute } from "./src/routes/usuarioRoute.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from 'cors';



dotenv.config();
const app = express();


app.use(cors({
  origin: 'http://localhost:3000'
}));


const porta = process.env.PORTA;



const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API da empresa WORKFACIL",
        version: "1.0.0",
        description: "API para gerenciamento de empresas, candidatos, usuários e vagas de emprego"
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Servidor Local"
        }
      ]
    },
    apis: ["./src/documentation/swaggerComentarios.js"]
  };
  

const swaggerDocs = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


app.use(express.json());

app.use("/empresas", empresaRoute);
app.use("/candidato", candidatoRoute);
app.use("/vaga", vagasRoute);
app.use("/usuario", usuarioRoute);
app.use("/", (req, res, next)=>{
  return res.json("ola")
})


app.listen(porta, ()=>{
    console.log("ouvindo porta: " + porta)
})
