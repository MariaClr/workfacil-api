import Empresa from "../model/empresa.js";
import Usuario from "../model/usuario.js";
import Vaga from "../model/vagas.js";
import Candidato from "../model/candidato.js";


// Relação entre Usuario e Empresa
Usuario.hasMany(Empresa, {
    constraints: true,
    foreignKey: "usuarioId",  
});

// Relação entre Usuario e Candidato
Usuario.hasMany(Candidato, {
    constraints: true,
    foreignKey: "usuarioId",  
});

// Relação entre Empresa e Usuario
Empresa.belongsTo(Usuario, {
    constraints: true,
    foreignKey: "usuarioId",  })

// Relação entre Candidato e Usuario
Candidato.belongsTo(Usuario, {
    constraints: true,
    foreignKey: "usuarioId",  
});

// Relação entre Empresa e Vaga
Empresa.hasMany(Vaga, {
    constraints: true,
    foreignKey: "empresaId",
});

// Relação entre Vaga e Empresa
Vaga.belongsTo(Empresa, {
    constraints: true,
    foreignKey: "empresaId", 
    allowNull:false
});


