const primeiroNumero = prompt("Primeiro numero")
const segundoNumero = prompt("Segundo numero")

const x = parseFloat(primeiroNumero)
const y = parseFloat(segundoNumero)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(   
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
)