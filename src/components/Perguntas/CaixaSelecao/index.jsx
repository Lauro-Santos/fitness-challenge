import style from "./caixaselecao.module.css";

import React, { useState } from "react";

const InfoBox = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={style.box}>
      <button className={style.botao} onClick={handleClick}>
        <svg
          viewBox="0 0 16 23"
          fill="none"
        >
          <path
            id="Polygon"
            d="M15.3942 11.6573L0.434705 22.4044L0.434706 0.910147L15.3942 11.6573Z"
            fill="#95FF00"
          />
        </svg>
        {title}
      </button>
      {open && (
        <div
          className={style.info}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default InfoBox;
