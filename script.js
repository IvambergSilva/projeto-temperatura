function calcular(){
	var valorDigitado = Number(document.getElementById("valor").value)
	
	var escolha1 = document.getElementById("escolha1")
	var opcao1 = escolha1.options[escolha1.selectedIndex].value
	
	var escolha2 = document.getElementById("escolha2")
	var opcao2 = escolha2.options[escolha2.selectedIndex].value

	var resultado = document.getElementById("resultado")    


	if (opcao1 == opcao2 && opcao1 != "sel" && opcao2 != "sel"){
		resultado.innerText =('Escolas termométricas iguais')
	} 
	if(opcao1=="celsius" && opcao2=="fahrenheit"){
		resultado.innerText =`${valorDigitado}°C equivale à ${(valorDigitado * 1.8 + 32).toFixed(2)}°F`
	}
	else if (opcao1=="celsius" && opcao2=="kelvin"){
		resultado.innerText =`${valorDigitado}°C equivale à ${(valorDigitado + 273.15).toFixed(2)}°F`
	}
	else if (opcao1=="fahrenheit" && opcao2=="celsius"){
		resultado.innerText =`${valorDigitado}°C equivale à ${((valorDigitado - 32)*1.8).toFixed(2)}°F`
	}
	else if (opcao1=="fahrenheit" && opcao2=="kelvin"){
		resultado.innerText =`${valorDigitado}°C equivale à ${((valorDigitado - 32)*1.8 + 273.15).toFixed(2)}°F`
	} 
	else if (opcao1=="kelvin" && opcao2=="celsius"){
		resultado.innerText =`${valorDigitado}°C equivale à ${(valorDigitado - 273.15).toFixed(2)}°F`
	} 
	else if (opcao1=="kelvin" && opcao2=="fahrenheit"){
		resultado.innerText =`${valorDigitado}°C equivale à ${((valorDigitado - 273.15)*1.8 + 32).toFixed(2)}°F`
	}
	else if (opcao1 == "sel" || opcao2 == "sel"){
		resultado.innerText =('Selecione as duas escalas')
	}
}
