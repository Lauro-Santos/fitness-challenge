import style from "./rodape.module.css";
import logo from "./logo.png";
import logoFaos from "./logo-francisco.png";
import logoLauro from "./logo.svg"

export default function Rodape() {
  return (
    <footer className={style.rodape}>
      <p className={style.descricao}>
        As fotos,textos e tudo mais nesse projeto são apenas para estudo de um
        proejto pessoal nenhuma das informações acima são reais .
      </p>
        <img className={style.logo} src={logo} alt="Logo Fitness Challenger" />
      <div className={style.autores}>
        <p>Feito por: </p>
        <img src={logoFaos} alt="Logo Faos" />
        <img src={logoLauro} alt="Logo Lauro" />
      </div>
    </footer>
  );
};
