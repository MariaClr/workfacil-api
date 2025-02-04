import db from "../db/db.js";
import { DataTypes } from "sequelize";

const Usuario = db.define("Usuario", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "campo precisa de um email valido"
            }
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    tipoUsuario: {
        allowNull: false,
        type: DataTypes.ENUM("empresa", "candidato", "admin")
    }

}, {
    timestamps:true,
    tableName:"usuarios"
})

export default Usuario;