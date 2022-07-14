const promptSync = require('prompt-sync')({sigint: true});
const lista = [];

function adicionaItens() {  
  let entradaUsuario = promptSync('Digite um item:');
  
  while(true) {      
    if (entradaUsuario.toUpperCase() == 'SAIR' || entradaUsuario.toUpperCase() == '/S') {
      break;      
    } else {
      lista.push(entradaUsuario);
      entradaUsuario = promptSync('Digite um item:');            
    };
  };  
};

function exibeLista() {
  lista.sort().map((item) => console.log(`${lista.indexOf(item)+1}. ${item}`)); 
};

adicionaItens();
exibeLista();

