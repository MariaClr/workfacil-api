import db from "../db/db.js";
import { DataTypes } from "sequelize";

const Empresa = db.define("Empresa", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    cnpj:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate: {
            len: {
                args: [14, 14],
                msg: "cnpj precisa ter 12 caracteres "
            }
        }
    },
    nomeEmpresa: {
        type: DataTypes.STRING,
        allowNull: false
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

})

export default Empresa;