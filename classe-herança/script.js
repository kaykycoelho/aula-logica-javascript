//superclasse
class Animal {

    //atributo
    constructor(nome) {
        this.nome = nome;
    }

    //método
    fazersom() {
        console.log("o animal fez um som");
    }
}

//subclasse
class cachorro extends Animal{
    //herdandando o método da superclasse e sobreescrevendo
    fazersom() {
        console.log("o cachorro late");
    }
}

let rex = new cachorro("rex");
console.log(rex.nome);
rex.fazersom();