/**
 * Cálculo do consumo do combustível
 * @author Kevin Teodoro
 */

const input = require ('readline-sync')

// variáveis
let distancia, litros, consumo

console.clear()
console.log("calculo do consumo do combustível")

// entrada
distancia = Number(input.question("Distancia percorrida: "))
litros = Number(input.question("Quantidade de litros de combustivel: "))

// processamento
consumo = distancia / litros

// saída
console.log(`consumo do veiculo: ${consumo.toFixed(1)} km/l`)




