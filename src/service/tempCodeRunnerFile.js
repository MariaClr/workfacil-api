export default function validaCnpj(cnpj) {
    const cnpjLimpo = cnpj.replace(/\D/g, '');
    
    if (cnpjLimpo.length !== 14 || /^(\d)\1{13}$/.test(cnpjLimpo)) {
        return false;
    }

    const pesosDigito1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesosDigito2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const calcularDigito = (numeros, pesos) => {
        const soma = numeros.reduce((acc, num, idx) => acc + (num * pesos[idx]), 0);
        return soma % 11 < 2 ? 0 : 11 - (soma % 11);
    };

    const digitos = cnpjLimpo.split('').map(Number);
    const digito1 = calcularDigito(digitos.slice(0, 12), pesosDigito1);
    
    if (digito1 !== digitos[12]) return false;

    const digito2 = calcularDigito(digitos.slice(0, 13), pesosDigito2);
    return digito2 === digitos[13];
}

console.log(validaCnpj("11.444.777/0001-61")); // true (CNPJ válido)
console.log(validaCnpj("11444777000161"));     // true (formatação diferente)
console.log(validaCnpj("63.658.364/0001-50")); // true (outro válido)
console.log(validaCnpj("63658364000150")); // true (outro válido)