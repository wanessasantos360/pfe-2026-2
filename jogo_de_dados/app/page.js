import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Jogo de dados</h1>
      <br/>
      <h2>Rodada 1/5</h2>

      <div>
        <h3>Jogador 1</h3>
        <p>Dado 1</p>
        <p>Dado 2</p>
        <buttom>Jogar</buttom>
      </div>

      <div>
        <h3>Jogador 2</h3>
      </div>

    </div>
  );
}
