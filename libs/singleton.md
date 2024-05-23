## Singleton

#### Vantagens 

- Garantir que uma classe tenha apenas uma única instância.
- Ponto de acesso global para aquela instância.
- O objeto singleton é inicializado somente quando for pedido pela primeira vez.

#### Desvantagens

-  Viola o princípio de responsabilidade única. O padrão resolve dois problemas de uma só vez.
-  Pode ser difícil realizar testes unitários do código cliente do Singleton porque muitos frameworks de teste dependem de herança quando produzem objetos simulados. 