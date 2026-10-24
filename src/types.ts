export type produtos = {
  id: string;
  nome: string;
  categoria: string;
  preco: number;
  estoque: number;
};
export type clientes = {
  id: string;
  nome: string;
  email: string;
};
export type carrinhos = {
  produtoId: string;
  quantidade: number;
};
export type pedidos = {
  id: string;
  clienteId: string;
  itens: Array<{
    produtoId: string;
    quantidade: number;
    precoUnitario: number;
  }>;
};
