import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {ContaSalario} from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const conta2 = new ContaPoupanca(100, 102, cliente2);

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

console.log(contaCorrenteRicardo);
console.log(conta2);

// Exemplo de classe abstrata
// const conta3 = new Conta(111, cliente1);

const conta4 = new ContaSalario(cliente1);
conta4.depositar(1000);
conta4.sacar(100);
console.log(conta4);