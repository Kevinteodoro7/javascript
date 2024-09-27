/**
 * Ficha de um aluno na academia
 *  @author Kevin Teodoro
*/

// variáveis

let nome
let idade
let peso
let altura
let vip
let fcm
let imc

console.clear()
nome = "Kevin Teodoro"
idade = 24
peso = 70
altura = 1.75
vip = true

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

// Saída

console.log("Ficha do aluno")
console.log("___________________________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)

