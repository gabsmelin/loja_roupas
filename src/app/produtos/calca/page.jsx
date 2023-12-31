import Image from "next/image"
import Link from "next/link"
import '../../../Components/ScssProdutos/produtos.scss'

export default function Calca() {
    return(
        <div className="container-prod">
            <div>
                <h1>CALÇAS</h1>
                <h5>AS CALÇAS MAIS BONITAS DA QUEBRADA VOCÊ SÓ ENCONTRA AQUI!</h5>
            </div>
            <ul>
                <li>
                    <Image src="/img/calca1.png" alt="Calça cargo verde." width={350} height={400}/>
                    <p>Calça Cargo</p>
                    <p>R$100,00</p>
                    <p>Calça Cargo na cor verde lodo, estica na cintura e é super confortavel.</p>
                    <button>Esgotado.</button>
                </li>
                <li>
                    <Image src="/img/calca2.png" alt="Calça cargo jeans." width={350} height={400}/>
                    <p>Calça Cargo</p>
                    <p>R$100,00</p>
                    <p>Calça Cargo na cor jeans, estica na cintura e é super confortavel.</p>
                    <button>Esgotado.</button>
                </li>
                <li>
                    <Image src="/img/calca3.png" alt="Calça cargo bege." width={350} height={400}/>
                    <p>Calça Cargo</p>
                    <p>R$100,00</p>
                    <p>Calça Cargo na cor bege, estica na cintura e é super confortavel.</p>
                    <button>Esgotado.</button>
                </li>
            </ul>
        </div>
    )
}