function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2)) //10
console.log(minhaFuncao(10)) //50

// Exercicio 2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)