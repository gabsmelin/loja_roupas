

export default function Produto({params}) {
    return(
        <div>
            <h1>Recebendo o parâmetro gerado pelo segmento id:</h1>
            <h2>Nome recebido : {params.nome}</h2>
        </div>
    )
}