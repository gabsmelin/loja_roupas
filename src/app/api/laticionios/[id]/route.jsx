import { NextResponse } from 'next/server';

const queijos = [
  { id: 1, nome: "Queijo Cheddar", preco: 12.99, tipo: "Fatiado" },
  { id: 2, nome: "Queijo Gouda", preco: 10.49, tipo: "Fatiado" },
  { id: 3, nome: "Queijo Brie", preco: 15.75, tipo: "Camembert" },
  { id: 4, nome: "Queijo Roquefort", preco: 17.99, tipo: "Azul" },
  { id: 5, nome: "Queijo Parmesão", preco: 9.99, tipo: "Ralado" },
];

export async function GET() {

    return NextResponse.json(queijos);

}
