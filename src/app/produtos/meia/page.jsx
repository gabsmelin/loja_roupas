import Image from "next/image"
import '../../../Components/ScssProdutos/produtos.scss'

export default function Meia() {
    return(
        <div className="container-prod">
             <div>
                <h1>MEIAS</h1>
                <h5>AS MEIAS MAIS BONITAS DA QUEBRADA VOCÊ SÓ ENCONTRA AQUI!</h5>
            </div>
            <ul>
                <li>
                    <Image src="/img/Meia1.png" alt="Meia." width={350} height={400}/>
                    <p>Meia  </p>
                    <p>R$25,00</p>
                    <p>Meia na cor branca com preta, estampada.</p>
                    <button>Esgotado.</button>
                </li>
                <li>
                    <Image src="/img/Meia2.png" alt="Meia." width={350} height={400}/>
                    <p>Meia  </p>
                    <p>R$20,00</p>
                    <p>Meia na cor preta com branco, estampada.</p>
                    <button>Esgotado.</button>
                </li>
                <li>
                    <Image src="/img/Meia3.png" alt="Meia." width={350} height={400}/>
                    <p>Meia  </p>
                    <p>R$28,00</p>
                    <p>Meia na cor branca com preta, estampada.</p>
                    <button>Esgotado.</button>
                </li>
            </ul>
        </div>
    )
}