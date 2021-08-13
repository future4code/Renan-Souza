// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
   return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt('Qual é a altura do retângulo'))
  let largura = Number(prompt('Qual é a largura do retângulo'))
  let area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt('Em que ano estamos?'))
  let anoNascimento = Number(prompt('Em que ano você nasceu?'))
  let idade =anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso/(altura*altura)
  return imc 

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nomeUsuario = prompt('Qual é o seu nome?')
  let idadeUsuario = Number(prompt('Qual é a sua idade?'))
  let emailUsuario = prompt('Qual é o seu email')
console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}
  

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt('Qual a sua primeira cor favorita')
  let cor2 = prompt('Qual a sua segunda cor favorita')
  let cor3 = prompt('Qual a sua terceira cor favorita')
  let coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)
  

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  console.log(string.toUpperCase())
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let custoIngresso = (custo/valorIngresso)
  return custoIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let comparacao = string1.length === string2.length
  return comparacao

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}