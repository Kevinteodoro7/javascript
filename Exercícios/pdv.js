/**
 * PDV
 * @author Kevin Teodoro
 */

const input = require('readline-sync')

// Variáveis
let total, desconto, totalDesconto, valorDesconto, valorPago, troco

console.clear()

console.log("_____  ________  ___      ___")
console.log("|\\   __  \\|\\   ___ \\\\  \\    /  /|")
console.log("\\ \\  \\|\\  \\ \\  \\_\\ \\ \\  \\  /  / /")
console.log(" \\ \\   ____\\ \\  \\ \\ \\ \\  \\/  / / ")
console.log("  \\ \\  \\___|\\ \\  \\_\\ \\ \\    / /  ")
console.log("   \\ \\__\\    \\ \\_______\\ \\__//   ")
console.log("   \\|__|     \\|_______|\\|__|/         ")
console.log("")

// entrada 1    
total = Number(input.question("Digite o valor total da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

// processameto 1
valorDesconto = (desconto * total) / 100

// processamento 2
totalDesconto = total - valorDesconto

// saída 1
console.log("")
console.log("-------------------------------------------------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`) 
console.log("")
console.log("-------------------------------------------------")


// entrada 2
valorPago = Number(input.question("Valor em dinheiro pago pelo cliente: "))

// processamento 3
troco = valorPago - totalDesconto

// saída 2
console.log("-------------------------------------------------")
console.log(`Valor pago em dinheiro: R$ ${valorPago.toFixed(2)}`)
console.log(`Troco: R$ ${troco.toFixed(2)}`)
console.log("-------------------------------------------------")




                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
