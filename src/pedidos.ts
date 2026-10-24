import { ItemCarrinho, ItemPedido, Pedido } from "./types";
import { buscarProduto, atualizarProduto } from "./produtos";
import { buscarCliente } from "./clientes";
import { calcularTotal } from "./carrinho";

let pedidos: Pedido[] = [];

export function finalizarPedido(