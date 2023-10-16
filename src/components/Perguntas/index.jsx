import InfoBox from "./CaixaSelecao";
import style from "./perguntas.module.css";
import imagem from "./background_faixas.png";

export default function Perguntas() {
  return (
    <section className={style.perguntas}>
      <h4 className={style.titulo}>Dúvidas<br/>frequentes</h4>

      <div className={style.caixas}>
        <InfoBox title="Quais as formas de pagamento?" content="testando"/>
        <InfoBox title="Como vou receber os treinos?" content="testando"/>
        <InfoBox title="Como posso esclarecer minhas dúvidas?" content="testando"/>
        <InfoBox title="Qualquer pessoa pode praticar?" content="testando"/>
      </div>
      <img className={style.imagem} src={imagem} alt="Faixas com a logo do Fitness Challenge " />
    </section>
  );
}
