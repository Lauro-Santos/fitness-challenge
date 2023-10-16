//create function Cabecalho
import Botao from "components/Botao";
import Cartao from "./Cartao";
import style from "./cartoes.module.css";

export default function Cartoes() {
  return (
    <section className={style.cartoes_secao}>
      <h3 className={style.titulo}>O que você aprenderá</h3>
      <ul className={style.cartoes_conteiner}>
        <Cartao
          aula="Aula 01"
          img={require("./aula1.jpeg")}
          titulo="Avaliação corporal"
          descricao="rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e elit, sed do"
        />
        <Cartao
          aula="Aula 02"
          img={require("./aula2.jpeg")}
          titulo="Treino"
          descricao="rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e elit, sed do"
        />
        <Cartao
          aula="Aula 03"
          img={require("./aula3.jpeg")}
          titulo="Suplementação"
          descricao="rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e elit, sed do"
        />
      </ul>
      <div className={style.faixa}>
        <p className={style.texto}>
          Não desperdice tempo! Inicie o Método <span>Fitness Challenge AGORA!</span> e
          comece a transformar seu corpo e sua vida.
        </p>
        <Botao />
      </div>
    </section>
  );
}
