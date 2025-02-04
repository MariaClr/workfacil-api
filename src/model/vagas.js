import { DataTypes } from "sequelize";
import db from "../db/db.js";

const Vaga = db.define("Vaga", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    area:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dataPublicacao: {
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue: new Date()
    },
    dataVencimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull:false
    }

}, {
    tableName: "vagas",
    timestamps: true
})

export default Vaga;