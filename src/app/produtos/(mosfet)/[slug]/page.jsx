

export default function ProdutoSlug({params}) {

    if(params.slug == 'calca') {
        return(
            <div>
                <h1>Slug = {params.slug}</h1>
            </div>
        )
    } else if(params.slug == 'camiseta') {
        return(
            <div>
                <h1>deu bom</h1>
            </div>
        )
    }
}