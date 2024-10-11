/**
 * Alcool x gasolina
 * @author Kevin Teodoro
 */

const input = require('readline-sync')

//variaveis
let gasolina, alcool

console.clear()
console.log("calculadora alcool x gasolina")

//entrada
gasolina = Number(input.question("Valor da gasolina: R$"))
alcool = Number(input.question("Valor do alcool: R$"))

//processamento
if (alcool < 0.7 * gasolina) {
    console.log("abastecer com alcool")
} else {    
    console.log("abastecer com gasolina")
}
 




