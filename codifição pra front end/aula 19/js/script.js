let videoD = document.querySelector("#videoDrake");

	function playEpause(){
		
		if(videoD.paused){
			videoD.play()
		}else{
			videoD.pause()
		}
		
	}
	
	function modoNoturno(){
		
		let textoH1 = document.getElementById("titulo");
		let botaoA = document.getElementById("botao");
		let textoP = document.getElementById("P1texto");
	
		if(textoH1.innerHTML == "Modo Diurno"){
			document.body.style.backgroundColor = "black";
			textoH1.innerHTML = "Modo Noturno";
			textoH1.style.color = "white";
				
			botaoA.style.backgroundColor = "black";
			botaoA.style.color = "black;"
			botaoA.innerHTML = "Ativar Modo Diurno";
			
			textoP.style.color = "white";
			
		}else{
			document.body.style.backgroundColor = "white";
		
			textoH1.innerHTML = "Modo Diurno";
			textoH1.style.color = "black";
			botaoA.style.backgroundColor = "black";
			botaoA.style.color = "white";
			botaoA.innerHTML = "Ativar Modo Noturno";
			
			textoP.style.color = "black";
		}
}