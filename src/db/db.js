import 'dotenv/config';

import { Sequelize } from "sequelize";
const banco=process.env.BANCO

const db = new Sequelize(banco, {
    dialect: "mysql",
   
    pool: {
            max: 10,       // Número máximo de conexões no pool
            min: 0,        // Número mínimo de conexões no pool
            acquire: 30000, // Tempo máximo (em ms) para tentar adquirir uma conexão antes de gerar erro
            idle: 10000     // Tempo (em ms) que uma conexão pode ficar ociosa antes de ser liberada
          }
});

db.sync({force: false})  // `force: true` apaga e recria as tabelas
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados', error);
  });

export default db;