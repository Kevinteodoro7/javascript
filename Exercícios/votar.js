/**
 * Sistema de votos
 * @author Kevin Teodoro
 */

// Importação da biblioteca(pacote)
const input = require ('readline-sync')

// Variável
let idade 

console.clear()
console.log("Verificar obrigatoriedade de votar")

// Entrada
idade = Number(input.question("Digite sua idade: "))

// Processamento e saída
if (idade < 16) {
    console.log('voto proibido');
} else if (idade > 17 && idade < 71) {
    console.log('voto obrigatorio');
} else {
    console.log('voto facultativo');
}
