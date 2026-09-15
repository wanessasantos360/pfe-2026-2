"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Dado from "./components/Dado";
import { useState } from "react";

export default function Home() {

  const MAXIMO_RODADAS = 5;

  const [dado1Jogador1, setDado1Jogador1] = useState(1);
  const [dado2Jogador1, setDado2Jogador1] = useState(2);
  const [dado1Jogador2, setDado1Jogador2] = useState(3);
  const [dado2Jogador2, setDado2Jogador2] = useState(4);

  const [jogador1Jogou, setJogador1Jogou] = useState(false);
  const [jogador2Jogou, setJogador2Jogou] = useState(false);

  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [resultadoRodada, setResultadoRodada] = useState("");

  const [placarJogador1, setPlacarJogador1] = useState(0);
  const [placarJogador2, setPlacarJogador2] = useState(0);

  function sortearDado() {
    return (Math.floor(Math.random() * 6) + 1);
  }

  function avancarRodada() {
    setRodadaAtual(rodadaAtual + 1);
    setJogador1Jogou(false);
    setJogador2Jogou(false);
    setResultadoRodada("");
  }

  function handleJogarJogador1() {
    const novoDado1 = sortearDado();
    const novoDado2 = sortearDado();
    setDado1Jogador1(novoDado1);
    setDado2Jogador1(novoDado2);
    setJogador1Jogou(true);
    if (jogador2Jogou) {
      const somaJogador1 = novoDado1 + novoDado2;
      const somaJogador2 = dado1Jogador2 + dado2Jogador2;

      if (somaJogador1 > somaJogador2) {
        setResultadoRodada("Jogador 1 venceu");
        setPlacarJogador1(placarJogador1 + 1);
      } else if (somaJogador1 < somaJogador2) {
        setResultadoRodada("Jogador 2 venceu");
        setPlacarJogador2(placarJogador2 + 1);
      } else {
        setResultadoRodada("Empate!!");
      }
    }
  }

  function handleJogarJogador2() {
    const novoDado1 = sortearDado();
    const novoDado2 = sortearDado();
    setDado1Jogador2(novoDado1);
    setDado2Jogador2(novoDado2);
    setJogador2Jogou(true);
    if (jogador1Jogou) {
      const somaJogador2 = novoDado1 + novoDado2;
      const somaJogador1 = dado1Jogador1 + dado2Jogador1;

      if (somaJogador1 < somaJogador2) {
        setResultadoRodada("Jogador 2 venceu");
        setPlacarJogador2(placarJogador2 + 1);
      } else if (somaJogador1 > somaJogador2) {
        setResultadoRodada("Jogador 1 venceu");
        setPlacarJogador1(placarJogador1 + 1);
      } else {
        setResultadoRodada("Empate!!");
      }
    }
  }

  return (

    <div className={styles.page}>
      <h1>Jogo de dados</h1>
      <br />
      <h2>
        {rodadaAtual > MAXIMO_RODADAS
          ? "Resultado Final"
          : `Rodada Atual = ${rodadaAtual}`}
      </h2>

      <div style={{ "display": "flex" }}>
        <div className={styles.coluna1} style={{ "display": "flex" }}>
          <h3>Jogador 1</h3>
          <Dado valor={dado1Jogador1} />
          <Dado valor={dado2Jogador1} />
          <button onClick={handleJogarJogador1} disabled={jogador1Jogou}>Jogar os dados</button>
        </div>

        <div style={{
          "display": "flex",
          "flexDirection": "row"
        }}>
          <h3>Jogador 2</h3>
          <Dado valor={dado1Jogador2} />
          <Dado valor={dado2Jogador2} />
          <button onClick={handleJogarJogador2} disabled={jogador2Jogou}>Jogar os dados</button>
        </div>
      </div>
      <p>{resultadoRodada}</p>
      {jogador1Jogou && jogador2Jogou && (
        <button onClick={avancarRodada}>Próxima rodada</button>
      )}

    </div>
  );
}