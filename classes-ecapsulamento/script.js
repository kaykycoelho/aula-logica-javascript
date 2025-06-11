class pessoa {
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
let pessoa = new pessoa("maria", 22);
console.log(pessoa.nome);
pessoa.nome = ("maria carolina");
console.log(pessoa.nome);