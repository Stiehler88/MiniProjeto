Sistema de Gerenciamento de E-commerce
Estudante: Rodrigo Stiehler
Turma: Node

Objetivo
Desenvolver uma aplicação back-end utilizando TypeScript e Node.js para gerenciar produtos, clientes, carrinhos de compras, pedidos e relatórios de vendas.

Funcionalidades
Cadastro, listagem, busca, atualização e remoção de produtos.
Pesquisa de produtos por nome e categoria.
Cadastro e consulta de clientes.
Adição, remoção e alteração de itens do carrinho.
Cálculo de subtotais e totais.
Finalização e consulta de pedidos.
Atualização do estoque após a compra.
Relatórios de faturamento, pedidos e unidades vendidas.
Validação de dados e tratamento de operações inválidas.
Tecnologias utilizadas
TypeScript
Node.js
npm
Git e GitHub
Estrutura do projeto
src/types.ts: tipos e interfaces.
src/produtos.ts: gerenciamento de produtos.
src/clientes.ts: gerenciamento de clientes.
src/carrinho.ts: operações e cálculos do carrinho.
src/pedidos.ts: finalização e consulta de pedidos.
src/relatorios.ts: consolidação das vendas.
src/main.ts: demonstração das funcionalidades.
tsconfig.json: configuração do compilador.
package.json: dependências e comandos.

Regras de negócio
IDs de produtos e clientes devem ser únicos.
Produtos devem ter nome e categoria preenchidos, preço positivo e estoque não negativo.
Clientes devem ter nome e e-mail válidos, sem duplicidade de ID ou e-mail.
As quantidades do carrinho devem ser inteiros positivos.
A quantidade solicitada não pode superar o estoque disponível.
Pedidos exigem um cliente cadastrado e um carrinho com itens.
O estoque é atualizado após a validação de todos os itens.
Os pedidos guardam os preços praticados no momento da compra.
