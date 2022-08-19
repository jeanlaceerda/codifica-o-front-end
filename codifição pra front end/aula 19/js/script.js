let n1 = 10;
let n2 = 2;

let media = (n1 + n2) / 2


switch(media >= 8.5){
	case true:
		console.log("Parabéns,seu conceito é A ");
		break;
}

switch(media >= 7.0 && media < 8.5 ){
	case true:
		console.log("Você passou , Seu conceito é B ");
		break;
}

switch(media >= 5.0 && media < 7.0 ){
	case true:
		console.log("Você passou no sufoco, Seu conceito é C ");
		break;
}

switch(media < 5.0 && media > 1.0 ){
	case true:
		console.log("Você precisa estudar mais , Seu conceito é D ");
		break;

}
switch(media < 1 && media == 0 ){
	case true:
		console.log("Você está reprovado, seu conceito é E ")
		break;
}