import { NextResponse } from 'next/server'
import React from 'react'

const usuarios = [
  {id: 1, nome: 'Ana', email: 'ana@fiap.com'},
  {id: 2, nome: 'Carol', email: 'carol@fiap.com'},
  {id: 3, nome: 'Karina', email: 'kaka@fiap.com'},
  {id: 4, nome: 'Julia', email: 'ju@fiap.com'},
  {id: 5, nome: 'Stela', email: 'ste@fiap.com'},
]

export async function GET() {
  return NextResponse.json(usuarios);
}
