//declarando
class pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    //declarando um método
saudar() {
    return `olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
}

} 


//instânciando
const pessoa1 = new pessoa("ana", 35);
const pessoa2 = new pessoa("joão", 28);
console.log(pessoa1.saudar());
console.log(pessoa2.saudar());

//nova classe
class carro {

    //atributos
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    
    }

    //metodo
   exibirinfo() {
         return `carro: ${this.marca} ${this.modelo}`;
    
    }
}

//instancia
const meucarro = new carro("fusca", "1974");
console.log(meucarro.exibirinfo());