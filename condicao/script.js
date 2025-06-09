//if (se a condição for verdadeira)
const numerico = 7;

if(numerico > 8){
    console.log("o numero informado é maior que 8")
} else{
    console.log("o numero entao é menor que 8")
}

//else (se condição for falsa)
//estrutura aninhada e complexa
const nomealuno = "juliano";

if(nomealuno === "juliano"){ 
    console.log("ola " + nomealuno );
} 
else if(nomealuno === "maria"){
    console.log("ola maria");
} else{
    console.log("o nome não é juliano e nem maria");
}

//encadeamento de condição
let idade = 16;
let temRG = false;

if(idade >= 18 && temRG){
    console.log("voce pode votar")
}
else {
    console.log("voce não pode votar");
}

//switch
let novaidade = 18;

switch(novaidade){
case 18:
console.log("o usuario tem 18");
break;
case 17:
console.log("o usuario tem 17");
break;
default:
    console.log("idade inválida");

}