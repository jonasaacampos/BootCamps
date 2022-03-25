Em contextos diferentes, são apresentados tipos de erros diferentes

###  EMACScript Error
> Erros que ocorrem em tempo de execução

- Mensagem
- Nome
- Linha
- Call Stack

### DOMException
> Erros relacionados ao Documet Object Model (DOM)
> referente à estrutura da árvore da página

### Tratamento de erros

### Trow
> Traz o retorno da função como um objeto de erro

### Try...catch
> Verifica se em algum trecho do código possui um erro, e faz o tratamento dentro do código

### Finaly
> Instrução chamada independentemente de erro ou não

## Manipular objeto Error

```
new Error(message, fileName, lineNumber);

const meuErro = new Error('Mensagem Inválida');
meuErro.name = 'InvalidMessage';

throw meuErro;

```

# Tratamento de Erros


## Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número
- Realize as seguintes validações
  - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
  - Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
  - Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
- Utilize a declaração `try...catch`
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`

## Links Auxiliares

- [Objeto Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [instanceof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
- [typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)
- [try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
-[stebsnusch/basecamp-javascript](https://github.com/stebsnusch/basecamp-javascript/blob/main/debug-error/README.md)