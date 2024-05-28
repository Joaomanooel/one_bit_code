const nome1 = prompt("Nome do primeiro veiculo")
const velocidade1 = parseFloat(prompt("Velocidade do primeiro veiculo"))
const nome2 = prompt("Nome do segundo veiculo")
const velocidade2 = parseFloat(prompt("Velocidade do segundo veiculo"))

if (velocidade1 > velocidade2){
    alert(nome1 + " é mais rapido que o " + nome2)
}else if (velocidade2 > velocidade1){
    alert(nome2 + " é mais rapido que o " + nome1 )
}else{
    alert(nome1 + " e " + nome2 + " possuem velocidade iguais. ")
}