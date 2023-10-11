import Link from "next/link"

export default function Cabecalho() {
    return (
        <div>
            <p><Link href="/">Home</Link></p>
            <p><Link href="/produtos/calca">Calças</Link></p>
            <p><Link  href="/produtos/tenis">Tênis</Link></p>
            <p><Link  href="/produtos/camisa">Camisetas</Link></p>
            <p><Link  href="/produtos/meia">Meias</Link></p>
        </div>
    )
  }