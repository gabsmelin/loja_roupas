import Image from "next/image"
import '../../../Components/ScssProdutos/produtos.scss'

export default function Tenis() {
    return(
        <div className="container-prod">
             <div>
                <h1>TÊNIS</h1>
                <h5>OS TÊNIS MAIS BONITAS DA QUEBRADA VOCÊ SÓ ENCONTRA AQUI!</h5>
            </div>
            <ul>
                <li>
                    <Image src="/img/tenis1.png" alt="Tênis" width={350} height={400}/>
                    <p>Tênis</p>
                    <p>R$799,00</p>
                    <p>Tênis da nike, linha seleção brasileira, na cor branca e azul.</p>
                    <button>Esgotado.</button>
                </li>
                <li>
                    <Image src="/img/tenis2.png" alt="Tênis."width={350} height={400}/>
                    <p>Tênis</p>
                    <p>R$599,00</p>
                    <p>Tênis da adidas, linha anos 200, na cor branca e azul.</p>
                    <button>Esgotado.</button>
                </li>
                <li>
                    <Image src="/img/tenis3.png" alt="Tênis." width={350} height={400}/>
                    <p>Tênis</p>
                    <p>R$499,00</p>
                    <p>Tênis da nike, modelo M2K, nas cor branca, vermelha e preta.</p>
                    <button>Esgotado.</button>
                </li>
            </ul>
        </div>
    )
}