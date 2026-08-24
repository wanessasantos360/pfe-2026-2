import Image from "next/image";
import styles from "./page.module.css";
import Profile from "./componentes/profile";
import MiniBio from "./componentes/miniBio";
import MeusPets from "./componentes/meusPets";


export default function Home() {
  return (
    <div className={styles.page}>
      <Profile/>
      <MiniBio/>
      <MeusPets/>
    </div>
  );
}
