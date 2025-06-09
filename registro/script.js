//definindo registro de cliente / objetos
const cliente = {
    nome: "joão silva",
    idade: 30,
    email: "joão.silva@gmail.com"
}

//acessando os campos do registro
console.log(cliente);
console.log(cliente.nome);
console.log(cliente.idade);
console.log(cliente.email);

//modificando o resgistro do cliente
cliente.idade = 31;

//adicionando um novo campo
cliente.telefone = "1234-5678";

console.log(cliente);