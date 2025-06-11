//Abrindo um banco de dados IndexedDB
const request = indexedDB.open("clinteDB", 1);

request.onupgradeneeded = funtion(event) {
const db = event.Target.result;
const store = db.createObjectStore("clientes", {keypath: "id"});
store.createindex("nome", "nome", {unique: false});
}

request.onsuccess = funtion(event) 
    const db = event.Target.result;
    const transaction = db.transaction("cliente", "readwrite");
    const store = transaction.objectstore("clientes");

//adicionando um novo cliente
store.add({ id: 1, nome: "Maria Eduarda", email: "maria@email.com"});

//lendo um clinte pelo nome
const index = store.index("nome");
const nomeindex = index.get("Maria Eduarda");

nomeindex.onsuccess = function(event) {
     console.log(nomeindex.result);
}
}

