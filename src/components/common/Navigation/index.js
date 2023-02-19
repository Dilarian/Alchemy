import React from "react";
import useNavigate from "react-router-dom";

import IconNavigation from "../IconNavigation";

import "./style.scss";
import {ROUTE} from "../../../utils/const";

function Navigation() {
  const navigate = useNavigate();
  const onClickBodyMenu = (ev) => {
    ev.stopPropagation();
  };

  const onClickNavigate = (path) => {
    navigate(path)
  }

  const onClickExit = () => {
    localStorage.removeItem("key");
    navigate(ROUTE.entrance);
  };
  return (
    <div className="containerNavigation" onClick={onClickBodyMenu}>
      <div className="headerNavigation">
        <div className="imageHeader">
          <IconNavigation />
          <div className="wordHeader">Задачи по химии</div>
        </div>
      </div>
      <div className="wordContainer">
            <span className="link" onClick={() => onClickNavigate(ROUTE.task)}>
              Задачи
            </span>
            <span className="link" onClick={() => onClickNavigate(ROUTE.favourites)}>
              Избранное
            </span>
            <span
              onClick={onClickExit}
              className="link"
            >
              Выйти
            </span>
      </div>
    </div>
  );
}

export default Navigation;
