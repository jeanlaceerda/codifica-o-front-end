let marcaVw = ["polo", "Jeta", "Gol" ,"Nivus", "Taos"]
let marcaGm = ["Camaro", "Cruze", "Onix", "Spin", "Joy"]
let marcaFiat = ["Pulse", "Argo", "Mobi", "Cronos", "Toro"]


if(marcaVw[2] == "Gol"){
	console.log("Meu carro é um " + marcaVw[2])
}else{
	console.log("Estou liso , não tenho carro !")
}

if(marcaGm[0] == "Camaro"){
	console.log("Meu carro é um " + marcaGm[0] + " amarelo")
}
else{
	console.log("Estou liso , Vou trabalhar pra comprar um carro")
}

if(marcaFiat[1]== "Mobi"){	
	console.log("Meu carro é um " + marcaFiat[3])
}else{
	console.log("Estou liso , Vou trabalhar pra comprar um carro")
}

for(i = 0; i < marcaVw.length; i++){
	if(marcaVw[i] == "Taos"){
		console.log("Achei meu carro na posição " + i)
	}else{
		console.log("Esse não é meu carro " + marcaVw[i])
	}
}


let frutas = ["Maça", "Melão", "Mamão", "Uva", "Manga", "Banana", "melância", "Graviola", "Acerola", "Jambo", "Caju"]

for(i = 0; i < frutas.length; i++){
	if(frutas[i] == "Manga"){
		console.log("Achei a fruta que quero , na posição " + i ,"essa fruta é " + frutas[i])
	}else{
		console.log("Essa não é a fruta que eu quero , essa é a fruta " + frutas[i])
	}
}

