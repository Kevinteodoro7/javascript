/**
 * Cálculo do consumo de água
 * @author Kevin Teodoro
 */

// Importa a biblioteca
const input = require ('readline-sync')

// Variáveis
let consumo, peso

console.clear()

// Entrada
peso = Number(input.question("Digite o seu peso(em kg): "))

// Processamento
consumo = peso * 0.035 

// Saída
console.log(`Consumo diario de agua deve ser: ${consumo.toFixed(3)} litros`)

