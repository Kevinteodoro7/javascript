/**
 * APP - calculadora de saúde
 *  @author Kevin Teodoro
*/

const input = require ('readline-sync')
const colors = require ('colors')


// variáveis
let nome, idade, peso, altura, fmc, imc, consumo


console.clear()
console.log(" _____                  _____                      _   _     _               ")
console.log("|_   _|                /  ___|                    | | | |   (_)             ")
console.log("  | |_   _ _ __   ___  \\ `--.  ___  _ __ ___   ___| |_| |__  _ _ __   __ _  ")
console.log("  | | | | | '_ \\ / _ \\  `--. \\/ _ \\| '_ ` _ \\ / _ \\ __| '_ \\| | '_ \\ / _` | ")
console.log("  | | |_| | |_) |  __/ /\\__/ / (_) | | | | | |  __/ |_| | | | | | | | (_| | ")
console.log("  \\_/\\__, | .__/ \\___| \\____/ \\___/|_| |_| |_|\\___|\\__|_| |_|_|_| |_|\\__, | ")
console.log("      __/ | |                                                         __/ | ")
console.log("     |___/|_|                                                        |___/  ")

console.log("")

// Entrada de dados
nome = input.question("Digite seu nome: ")
idade = Number(input.question("Digite sua idade: "))
peso = Number(input.question("Digite seu peso em kg: "))
altura = Number(input.question("Digite sua altura em metros: "))

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035

// Saída
console.log("")
console.log("Ficha do aluno")
console.log("___________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`FMC: ${fmc}`)
console.log(`IMC: ${imc}`)

// Tabela IMC
if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)
} else if (imc < 25){
    console.log("Peso Nomal".green)
}    else if (imc < 30){
    console.log("Levemente Acima do Peso".yellow)
}   else if (imc < 35){
    console.log("Obesidade Grau 1".magenta)
}   else if (imc < 40){
    console.log("Obesidade Grau 2 (severa)".red)
}   else {
    console.log("Obesidade Grau 3 (mórbida)".bgRed)
}

//consumo de água
console.log(`Consumir por dia ${consumo.toFixed(3)}`)

