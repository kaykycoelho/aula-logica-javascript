//classe de produto
class produto{
   constructor(nome,preco,quantidade){
this.nome = "camiseta de Time";
   this. preco = 100.00;
    this.quantidade = 20;
   } 
    


exibirinfo(){
    return 'nome:' + this.nome + '\npreço:'+ this.preco + '\nquantidade:'+ this.quantidade
}

}

const produto1 = new produto ("camiseta de time", 100.00, 20 );
console.log(produto1.exibirinfo());

//subclasse
class alimento extends produto{
    constructor(nome,dataValidade){
        
        super(nome);
        this.dataValidade = dataValidade;
    }
    exibirinfo(){
        return 'nome:' + this.nome + "\nData de Validade:"+ this.dataValidade;
    }

}
const arroz = new alimento("arroz","16/06/2025");
console.log (arroz.exibirinfo());



