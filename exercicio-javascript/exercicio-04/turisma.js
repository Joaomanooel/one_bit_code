const turista = prompt("Qual é o seu nome ? ")
let cidades = ""
let contagem = 0

let continuar = prompt ("Você visitou alguma cidade ? ")

while (continuar === "sim"){
    let cidade = prompt("Qual é o nome da cidade visitada ? ")
    // cidades = cidades + ...
    cidades += "-" + cidade + "\n"
    contagem ++
    continuar = prompt("Você visitou alguma outra cidade? Sim/Não")
}

alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
)