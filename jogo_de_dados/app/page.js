"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Dado from "./components/Dado";
import { useState } from "react";

export default function Home() {
  const [dado1Jogador1, setDado1Jogador1] = useState(1);
  const [dado2Jogador1, setDado2Jogador1] = useState(2);
  const [dado1Jogador2, setDado1Jogador2] = useState(3);
  const [dado2Jogador2, setDado2Jogador2] = useState(4);
  const [jogadorDaVez, setJogadorDaVez] = useState(1);

  function sortearDado() {
    return (Math.floor(Math.random() * 6) + 1);
  }

  function jogarJogador1() {
    setDado1Jogador1(sortearDado());
    setDado2Jogador1(sortearDado());
    setJogadorDaVez(2);
  }

  function jogarJogador2() {
    setDado1Jogador2(sortearDado());
    setDado2Jogador2(sortearDado());
    setJogadorDaVez(1);
  }

  return (

    <div className={styles.page}>
      <h1>Jogo de dados</h1>
      <br />
      <h2>Rodada 1/5</h2>

      <div style={{ "display": "flex" }}>
        <div className={styles.coluna1} style={{ "display": "flex" }}>
          <h3>Jogador 1</h3>
          <Dado valor={dado1Jogador1} />
          <Dado valor={dado2Jogador1} />
          <button onClick={jogarJogador1} disabled={jogadorDaVez !== 1}>Jogar os dados</button>
        </div>

        <div style={{
          "display": "flex",
          "flexDirection": "row"
        }}>
          <h3>Jogador 2</h3>
          <Dado valor={dado1Jogador2} />
          <Dado valor={dado2Jogador2} />
          <button onClick={jogarJogador2} disabled={jogadorDaVez !== 2}>Jogar os dados</button>
        </div>
      </div>
      <p>Testando</p>
      <button>Jogar novamente</button>

    </div>
  );
}
