/**
 * Cálculo da média aritmética de 3 valores
 * @athor Kevin Teodoro
 */

// importa a blibioteca read-linesync
const input = require('readline-sync')

// variáveis
let num1, num2, num3, media
console.clear()
console.log("Calculo da media aritmetica de 3 numeros")

// entrada
// No console entradas(input) numéricas precisam ser convertidas com uso do método Number()'
num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

// processamento
media = (num1 + num2+ num3) / 3

// Saída
console.log(`Media: ${media.toFixed(1)}`)
