//vetores ou array
let notas = [7.5, 6.3, 4.8, 9.2];

console.log("notas iniciadas", notas);

//ordernar em ordem crescente
notas.sort((a,b)=> a - b);

console.log("notas ordenadas (crescentes):",notas);

//ordenar em ordem decrecente
notas.sort((a,b)=> b - a);

console.log("notas ordenadas (decrecentes):",notas)

// vetor de string
let frutas = ["banana", "maçã", "laranja", "abacaxi",];

console.log("coleção de frutas:", frutas);

//ordenando em ordem alfabetica
frutas.sort();

console.log("frutas ordenadas:",frutas);