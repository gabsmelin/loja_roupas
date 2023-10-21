import React from 'react'

export default async function ShowUser({params}) {
    const response = await fetch('http://localhost:3000/dados')
    const usuarios = await response.json();
    const usuario = usuarios.filter((item) => item.id === params.id)

    return (
      <div>
          <h1></h1>
          <div>
              <p>ID: {params.id}</p>
              <p>Nome: {params.nome}</p>
              <p>Email: {params.email}</p>
          </div>
      </div>
    )
}
