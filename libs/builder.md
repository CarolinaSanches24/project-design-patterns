
## Caracteristicas 

- Separação do código que cria o objeto do código que usa o objeto.
- Criação de objetos complexos
- Permite a criação de objetos em etapas.
- Permite o method chaining;

## Method Chaining

Nada mais é que o nome dado às chamadas de método sequenciais, que normalmente atua no resultado do método anterior. É uma das técnicas usadas para se criar interfaces fluentes.

Para criar uma *interface* fluente usando method chaining você precisa *sempre retornar um objeto*. Este objeto pode ser o próprio objeto que iniciou as chamadas, ou se um novo objeto.

### Vantagens

- Separa a criação de Utilização.
- O cliente não precisa criar objetos diretamente.
- O mesmo código pode produzir objetos diferentes.
- Ajuda na aplicação dos principios SRP(Single Responsibility Principle) e OCP(Open-Closed Principle).

### Desvantagens
- O código final pode se tornar complexo.

