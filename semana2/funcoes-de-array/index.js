// EXERCÍCIO DE INTERPRETAÇÃO 1

//   { nome: "Amanda Rangel", apelido: "Mandi" }, 0, array inteiro
//   { nome: "Laís Petra", apelido: "Laura" }, 1, array inteiro
//   { nome: "Letícia Chijo", apelido: "Chijo" }, 2 array inteiro

// EXERCÍCIO 2

// ["Amanda Rangel", "Laís Petra", "Leticia Chijo"]

// EXERCÍCIO 3

// [
//   { nome: "Amanda Rangel", apelido: "Mandi"},
//   // { nome: "Lais Petra", apelido: "Laura"}
// ]

// EXERCÍCIO DE ESCRITA DE CÓDIGO 1

const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
];

const nomeDosPets = pets.map((pet) => {
  return pet.nome;
});

console.log('item a', nomeDosPets);

const cachorrosSalsicha = pets.filter((cachorro) =>{
  return cachorro.raca === 'Salsicha';
});

console.log('item b', cachorrosSalsicha);

const poodles = pets.filter((dog) => {
  return dog.raca ==="Poodle"
});

const cuponsPoodles = poodles.map((poodle) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`
  })

  console.log('item c', cuponsPoodles)