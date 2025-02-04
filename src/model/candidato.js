import db from "../db/db.js";
import { DataTypes } from "sequelize";

const Candidato = db.define("Candidato", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    nome: {
            allowNull: false,
         type: DataTypes.STRING
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [11, 11],
                msg: "cpf precisa ter 11 digitos "
            }
        },
        unique:true
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    numeroContato: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        allowNull: false,
        type: DataTypes.TEXT
    }
});
export default Candidato;