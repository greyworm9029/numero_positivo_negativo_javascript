// Verifica se um número é positivo, negativo ou neutro
function verificarNumero() {
    let numero = parseInt(prompt("Digite um número: "));
    
    if (numero > 0) {
        console.log(`${numero} é um número positivo.`);
    } else if (numero < 0) {
        console.log(`${numero} é um número negativo.`);
    } else {
        console.log(`${numero} é um número neutro.`);
    }
}

// Resultado
verificarNumero();
