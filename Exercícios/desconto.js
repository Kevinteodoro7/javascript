/**
 * Calculo do valor do desconto
 * @author Kevin Teodoro
 */

const input = require('readline-sync')

let totadesconto,total,desconto

console.clear()
console.log("calculo do valor do desconto")

// entrada
total = Number(input.question("Digite o valor da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))


// processamento
totalDesconto = total - ((desconto * total) /100)

// saida
console.log(`total com desconto: ${totalDesconto.toFixed(2)}`)


