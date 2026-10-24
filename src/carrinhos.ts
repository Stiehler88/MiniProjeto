import { ItemCarrinho } from "./types";
import { buscarProduto } from "./produtos";

export function adicionarItem(
  carrinho: ItemCarrinho[],
  produtoId: number,
  quantidade: number,
): ItemCarrinho[] {
  const produto = buscarProduto(produtoId);
