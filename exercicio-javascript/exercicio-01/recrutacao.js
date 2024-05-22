const primeiroNome = prompt("Insira seu primeiro nome")
const segundoNome = prompt("Insira seu segundo nome")
const campoDeEstudo = prompt("Insira seu Estudo")
const anoDeNascimento = prompt("Insira seu ano de nascimento")

window.alert(
    "Recruta cadastrado com sucesso\n" +
    "\nNome Completo " + primeiroNome + " " + segundoNome +
    "\nCampo de Estudo " + campoDeEstudo +
    "\nSua idade " + (2024 - anoDeNascimento)
)