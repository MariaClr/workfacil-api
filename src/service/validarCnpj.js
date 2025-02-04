export default function validaCnpj(cnpj){
   
        // Remove caracteres não numéricos
        cnpj = cnpj.replace(/[^\d]+/g, '');
    
        // Verifica se o CNPJ tem 14 caracteres e não é uma sequência de números iguais
        if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;
    
        // Validação do primeiro dígito verificador
        let length = 12;
        let numbers = cnpj.substring(0, length); // primeiros 12 números
        let digits = cnpj.substring(length); // últimos 2 dígitos
        let sum = 0;
        let pos = length - 7;
    
        for (let i = length; i >= 1; i--) {
            sum += numbers.charAt(i - 1) * pos--;
            if (pos < 2) pos = 9; // Reset the multiplier
        }
    
        let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (result != digits.charAt(0)) return false;
    
        // Validação do segundo dígito verificador
        length = 13;
        numbers = cnpj.substring(0, length); // primeiros 13 números
        sum = 0;
        pos = length - 7;
    
        for (let i = length; i >= 1; i--) {
            sum += numbers.charAt(i - 1) * pos--;
            if (pos < 2) pos = 9; // Reset the multiplier
        }
    
        result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        return result == digits.charAt(1);
    }
    

