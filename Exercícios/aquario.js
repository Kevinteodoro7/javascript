/**
 * Cálculo do volume do aquário
 * @author Kevin Teodoro
 */

const input = require ('readline-sync')

// Variáveis
let comprimento, largura, volume, altura

console.clear()
console.log("cálculo do volume do aquário")

// Entrada
comprimento = Number(input.question("Digite o comprimento em cm: "))
largura = Number(input.question("Digite a largura em cm: "))
altura = Number(input.question("Digite a altura em cm: "))

// Processamento
volume = (comprimento * largura * altura) /1000

// Saída
console.log(`Volumedo aquário: ${volume.toFixed(2)}litros`)



