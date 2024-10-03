/**
 * Calculo do troco
 * @author Kevin Teodoro
 */

const input = require('readline-sync')

// variáveis
let valorPago, total, troco

console.clear()
console.log("calcule o valor do troco")


// entrada
total = Number(input.question("Qual o valor da compra? "))
valorPago = Number(input.question("Qual o valor pago: "))


// processamneto

troco = valorPago - total

// saida
console.log(`valor do troco: R$ ${troco.toFixed(2)}`)



