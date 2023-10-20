import Image from "next/image"
import Link from "next/link"
import './cabecalho.scss'

export default function Cabecalho() {
    return (
        <div className="container-cab">
            <p><Link href="/">Home</Link></p>
            <p><Link href="/produtos/calca">Calças</Link></p>
            <p><Link  href="/produtos/tenis">Tênis</Link></p>
            <p><Link  href="/produtos/camisa">Camisetas</Link></p>
            <p><Link  href="/produtos/meia">Meias</Link></p>
            <p><Link  href="/tabela/queijo">Queijos</Link></p>
        </div>
    )
  }