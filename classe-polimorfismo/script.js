//superclasse
class Ave{

    //método
voar() {
    console.log("A ave voa");
 }

}

//superclasse
class Pinguim extends Ave {
    //polimorfismo
    voar() {
        console.log("Pinguins não podem voar");
    }
}

//instânciando
let ave = new Ave();
let pinguim = new Pinguim();
ave.voar();
pinguim.voar();