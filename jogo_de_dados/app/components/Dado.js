"use client"
import Image from "next/image";

export default function Dado({ valor }) {
    const caminhoImagem = `/dados/dado${valor}.png`;
    return (
        <Image src={caminhoImagem} alt={`dado com valor ${valor}`} width={80} height={80} />
    )

}