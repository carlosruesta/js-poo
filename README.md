### Aula 1

+ Instalação do Node.js na versão mais recente (v15)
+ Uso de node index.js para execução dos códigos de teste

### Aula 2

+ Proposta para campos privados em classes: https://github.com/tc39/proposal-class-fields#private-fields

+ Por padrão no JS utilizamos o "_" para indicar que um atributo é privado e não deveria ser alterado.
    + Isso mesmo! Apesar de ainda ser possível alterar essa propriedade isso é considerado uma má prática e estamos quebrando o encapsulamento da classe.

+ Atualmente no Js nenhum atributo ou método é realmente privado
    + JS é uma linguagem de escopo aberto e por isso é possível visualizar qualquer atributo ou propriedade de nossa classe.
    
+ O que aprendemos nessa aula:
    + Criação de métodos
    + Palavra chave this
    + Encapsulamento
    + Proposta de atributos privados
    + return e early return

### Aula 3

+ Organização em arquivos separados, organizando melhor o nosso código e facilitando a sua manutenção e desenvolvimento.
+ Uso de import
+ Uso do comando *npm init* para criação do módulo. o NPM é o gerenciador de pacotes mais utilizado para NODE (npm = Node Package Manager)
+ Ao criar o módulo foi adicionado ao projeto um arquivo package.json com as definições do módulo; 
+ Criamos módulos para compartilhar código entre os diferentes arquivos do meu sistema, ajudando na organização dele.
+ Na versão 13 do Node também receberemos uma mensagem informando que os módulos que estamos utilizando são experimentais.
+ Existem transpiladores (ou bundlers, como são comumente chamados) que traduzem esse código para uma versão retrocompatível do Node.js.

+ Parametros por valor e por referencia:
    + Quando passamos como parâmetro de um método os tipos primitivos estamos passando o uma cópia do valor
    + Quando passamos um objeto numa função o método será passado como tipo de referência. Estamos trabalhando com a informação direta, e todas as alterações serão refletidas no objeto original.

+ Em Javascript os tipos primitivos são:
    + String (texto)
    + Number (número)
    + Boolean
    + Null
    + undefined
    + Symbol

### Aula 4

+ Diferenças entre null e undefined
+ Aprofundando nos conceitos de referências a um espaço de memória
+ Get e Set
+ Melhor encapsulamento da classe
+ Protegendo atributos sensíveis 