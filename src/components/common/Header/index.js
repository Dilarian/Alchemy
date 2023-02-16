import React from "react";

import "./style.scss";
import IconNavigation from "../IconNavigation";

export default function Header({ title }) {
  return (
    <div className="header">
      <div className="titleHeader">{title}</div>
      <IconNavigation />
    </div>
  );
}
