//create function Cabecalho
import logo from "./logo.png";
import style from "./cabecalho.module.css";
import Botao from "components/Botao";

export default function Cabecalho() {
  return (
    <header className={style.cabecalho}>
      <div className={style.banner}></div>
      <div className={style.texto}>
        <img
          className={style.logo}
          src={logo}
          alt="Logo do Fitness Challenge"
        />
        <h2 className={style.titulo}>
          Foco, performace e <span>disciplina</span>
        </h2>
        <p className={style.descricao}>
          Alcance seus objetivos de forma eficaz e divertida com nosso programa
          comprovado de 30 dias!
        </p>
        <Botao/>
      </div>
    </header>
  );
}
