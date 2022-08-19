function modoNoturno(){
	
	let textoH1 = document.getElementById("titulo");
	let botaoA = document.getElementById("botao");
	
	if(textoH1.innerText == "Modo Diurno"){
		document.body.style.backgroundColor = "black";
	
		textoH1.innerHTML = "Modo Noturno";
		textoH1.style.color = "white";
		
		botao.style.backgroundColor = "white";
		botao.style.color = "black";
		botao.innerHTML = "Ativar Modo Diurno";
	
	}else{
		document.body.style.backgroundColor = "white";
		
		textoH1.innerHTML = "Modo Diurno";
		textoH1.style.color = "black";
		botao.style.backgroundColor = "black";
		botao.style.color = "white";
		botao.innerHTML = "Ativar Modo Noturno";
	}
}