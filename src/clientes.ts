import { Cliente } from "./types";

let clientes: Cliente[] = [
  { id: 1, nome: "Ana Souza", email: "ana@email.com" },
  { id: 2, nome: "Bruno Lima", email: "bruno@email.com" },
  { id: 3, nome: "Carla Santos", email: "carla@email.com" },
];

export function listarClientes(): Cliente[] {