
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
}

// c-)Faça uma função chamada "verificaSeEMaior"

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
Escreva true or false para as comparações abaixo:
 exemplo 1>2 = false
 a-) 1==='1'= false
 b-) 1=='1'= true
 c-) 'a'==='b'= false
 d-) 'b'>'a'= true
 e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = (nomeDoUsuario, anoDeNascimento, senhaDoUsuario, Nacionalidade ) => {
    const usuario = [];
    const idade = 2021 - anoDeNascimento;
    usuario.push(nomeDoUsuario, anoDeNascimento, senhaDoUsuario, Nacionalidade)

    //  Sua lógica aqui

}
console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
    //  Sua lógica aqui

}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    const nome = prompt("Digite seu nome");
   const vacina = prompt("Digite a vacina que você tomou na 1°dose ");

     if (vacina === "Coronavac") {
         tempo = 28
         data = "28/09/2021"
 }

     if (vacina === "Astrazenica ") {
         tempo = 90
         data = "01/12/2021"
}

     if (vacina === "Pfizer") {
         tempo = 90
         data = "01/12/2021"
}

        return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
}

 console.log(primeiraDose())



// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    const mudarPessoa = listDeUsuarios.filter((usuario) => {
           if (usuario.nome === nomeDoUsuario) {
        usuario.imunizacao = "completo"
         return usuario
    
    })
        
       return mudarPessoa; {
                  
         console.log(segundaDose("Barbara"));

}

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    const listarPessoasImunizadas = pessoaImunizada.map((pessoa) => {
        console.log(`Olá ${pessoa.nome}! Sua imunização está ${pessoa.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`);
    })

    console.log(listarPessoasImunizadas);
    return listarPessoasImunizadas;
}
avisoAosAtrasados();

// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastro = () => {
    //  Sua lógica aqui
}
console.log(cadastro());

const login = () => {
    //  Sua lógica aqui
}
console.log(login());

const primeiraDose = () => {
//  Sua lógica aqui
}
console.log(primeiraDose())
const segundaDose = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasados());