const medida = prompt("Insira uma medida em metros: ")
const unidade = prompt(
    "Para qual unidade de medida deseja converter ? "+
    "\n1. milimetros"+
    "\n2. centímetro"+
    "\n3. decímetro"+
    "\n4. decâmetro"+
    "\n5. quilômetro"+
    "\n6. milimetros" 
)

const  medidaSelc = parseFloat(medida) 

switch(unidade){
    case "1":
        alert("Resultado: " + medida + "m= "+  medida *1000 + "mm")
    break
    case "2":
        alert("Resultado: " + medida + "m= "+  medida *100 + "cm")
    break
    case "3":
        alert("Resultado: " + medida + "m= "+  medida *10 + "dm")
    break
    case "4":
        alert("Resultado: " + medida + "m= "+  medida / 10 + "dam")
    break
    case "5":
        alert("Resultado: " + medida + "m= "+  medida / 100 + "hm")
    break
    case "6":
        alert("Resultado: " + medida + "m= "+  medida / 1000 + "km")
    break
    default:("Invalido...")
}