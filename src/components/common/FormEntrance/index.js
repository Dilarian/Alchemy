import React from "react";

import "./style.scss";

export default function FormEntrance({ children, arg }) {
  return (
    <div className="containerEntrance">
      <div className="containerEntranceGrin">
        <h2>{arg}</h2>
      </div>
      <div className="containerEntranceWhite">{children}</div>
    </div>
  );
}
