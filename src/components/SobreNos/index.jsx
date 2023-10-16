import style from "./sobreNos.module.css";
import imagem from "./modelo-sobre.png";
import Botao from "components/Botao";

export default function SobreNos() {
  return (
    <>
      <section className={style.sobre}>
        <h4 className={style.titulo}>Sobre nós</h4>
        <article className={style.texto}>
          <img
            className={style.imagem}
            src={imagem}
            alt="Modelo fitnnes masculino em fundo verde."
          />
          <div className={style.paragrafos}>
            <p className={style.paragrafo}>
              Nossa equipe é composta por profissionais altamente qualificados e
              entusiastas do fitness, apaixonados por promover um estilo de vida
              saudável e ativo.
            </p>
            <p className={style.paragrafo}>
              Conhecimento e Experiência: Cada membro da nossa equipe possui
              formação e certificação em áreas como Educação Física, Fisiologia
              do Exercício, Nutrição e outras disciplinas relacionadas ao
              fitness.
            </p>
            <p className={style.paragrafo}>
              Além disso, nossa equipe acumula anos de experiência prática no
              treinamento de indivíduos de diferentes idades, níveis de
              condicionamento físico.
            </p>
          </div>
        </article>
      </section>
      <div className={style.faixa}>
        <h4 className={style.faixa_titulo}>NÃO PERCA MAIS TEMPO!</h4>
        <Botao />
      </div>
    </>
  );
}
