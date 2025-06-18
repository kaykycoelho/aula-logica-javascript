class Pessoa {
    constructor(nome, idade){
        this._nome = nome;
        this._idade = idade;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }
}
let pessoa = new Pessoa("Maria", 22);
console.log(Pessoa.Nome);
pessoa.nome = ("Maria carolina");
console.log(Pessoa.Nome);