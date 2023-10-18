import Image from "next/image"
import Link from "next/link"

export default function Cabecalho() {
    return (
        <div>
            <Image src="/img/logo.png" alt="logo" width={65} height={60}/>
            <p><Link href="/">Home</Link></p>
            <p><Link href="/produtos/calca">Calças</Link></p>
            <p><Link  href="/produtos/tenis">Tênis</Link></p>
            <p><Link  href="/produtos/camisa">Camisetas</Link></p>
            <p><Link  href="/produtos/meia">Meias</Link></p>
        </div>
    )
  }