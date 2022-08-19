let animais = ["Cachorro", "Gato", "Periquito", "Papagaio", "Elefante", "Leão", "Onça", "Rato", "Cassaco", "Tanajura"]

let lista = document.getElementById("lista");

console.log(lista)

for(i = 0;i < animais.length; i++ ){
	
	if(i > 0 && (i % 2) == 0){
		lista.innerHTML += "<li>"+ animais[i] +"</li>"
	}
}

