import { Cliente } from "./Cliente.js";

// classe abstrata poir não pode ser instanciada
export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor === Conta) {
            throw new Error("A classe Conta não pode ser instanciada diretamente");
        }
        this._agencia = agencia;
        this._cliente = cliente;
        // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
        this._saldo = saldoInicial;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // Esse método é abstrato e não deveria ser chamado diretamente
    sacar(valor) {
        throw new Error("Método abstrato e não pode ser chamado diretamente");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor <= 0) {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}
