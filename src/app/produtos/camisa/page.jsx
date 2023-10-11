import Image from "next/image"

export default function Camisa() {
    return(
        <div>
            <div>
                <h1>CAMISETAS</h1>
                <h5>AS CAMISETAS MAIS BONITAS DA QUEBRADA VOCÊ SÓ ENCONTRA AQUI!</h5>
            </div>
            <ul>
                <li>
                    <Image src="/img/camiseta1.png" alt="Camiseta cargo verde." width={250} height={300}/>
                    <p>Camiseta Cargo</p>
                    <p>R$79,99</p>
                    <p>Camiseta na cor branca, estampada.</p>
                    <button>Esgotado.</button>
                </li>
                <li>
                    <Image src="/img/camiseta2.png" alt="Camiseta cargo jeans." width={250} height={300}/>
                    <p>Camiseta Cargo</p>
                    <p>R$85,00</p>
                    <p>Camiseta Cargo na cor preta, estampada.</p>
                    <button>Esgotado.</button>
                </li>
                <li>
                    <Image src="/img/camiseta3.png" alt="Camiseta cargo bege." width={250} height={300}/>
                    <p>Camiseta Cargo</p>
                    <p>R$90,00</p>
                    <p>Camiseta Cargo na cor azul, estampada.</p>
                    <button>Esgotado.</button>
                </li>
            </ul>
        </div>
    )
}