## MAP
> coleção de arrays no formato [chave, valor]
> pode ser iterado pelo loop `for...  of`

- chaves de qualquer tipo 
- possuem a propriedade lenght  
- fáceis de iterar    			
- utilizado quando o valor das chaves é desconhecido  
- valores possuem o mesmo tipo	

stebnusch

```
// principais métodos
// adicionar, ler, deletar

const myMap = new Map()

myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

myMap.get(apple);
// 'fruit'

myMap.delete('apple');
// true

myMap.get('apple');
// undefined
```


## Set
> São estruturas de valores únicos

```
//adicionar, consultar e deletar

const mySet = new Set();

mySet.add(1);

mySet.has(1);

myset.delete(1);
```

- Possui valores únicos
- usa-se o `size` ao invés do `lengh` para consultar a quantidade de registro
- não possui métods `map, filter, reduce`, etc. que são métodos de um array

### Exercícios

**Coleções Chaveadas**

Atividade 1: Maps

Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

    Crie uma função getAdmins que recebe um Map;
    Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
    Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.

Atividade 2: Sets

Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
