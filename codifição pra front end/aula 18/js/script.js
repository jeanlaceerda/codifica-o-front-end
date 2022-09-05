function adicionarItem(){
	let valor = document.getElementById("frutas").value;
	let list = document.getElementById("nameFruit");
	
	if(valor == "" || valor.length < 3){
		alert("O campo está vazio ou está inválido")
			
	}else{
	
		
	list.innerHTML += "<li>" + valor + "</li>"
	
	document.getElementById("frutas").value = "";
	}
	console.log(valor)
	console.log(list)
	
	
	
}

	

	
	
	
	
