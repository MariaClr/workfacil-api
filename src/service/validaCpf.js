export default function validarCpf(cpf){
    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(cpf[i]) * (10 - i);
    let firstDigit = (sum * 10) % 11;
    if (firstDigit === 10) firstDigit = 0;
    if (firstDigit !== parseInt(cpf[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(cpf[i]) * (11 - i);
    let secondDigit = (sum * 10) % 11;
    if (secondDigit === 10) secondDigit = 0;
    return secondDigit === parseInt(cpf[10]);
}