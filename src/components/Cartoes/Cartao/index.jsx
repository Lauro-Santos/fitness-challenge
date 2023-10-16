import style from "./cartao.module.css";

export default function Cartao({aula, img, titulo, descricao}) {
  return (
    <li className={style.cartao}>
        <p className={style.aula}>{aula}</p>
        <img className={style.imagem} src={img} alt={titulo} />
        <h4 className={style.titulo}>{titulo}</h4>
        <p className={style.descricao}>{descricao}</p>
    </li>
  );
}
