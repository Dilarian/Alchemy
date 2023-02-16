import React from "react";

import IconNavigation from "../IconNavigation";

import "./style.scss";

function Navigation() {
  const onClickBodyMenu = (ev) => {
    ev.stopPropagation();
  };

  const onClickExit = () => {
    localStorage.removeItem("key");
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
        <nav className="wordNavigation">
          <li>
            <a className="link" href="http://localhost:3000/task">
              Задачи
            </a>
          </li>
          <li>
            <a className="link" href="http://localhost:3000/favourites">
              Избранное
            </a>
          </li>
          <li>
            <a
              onClick={onClickExit}
              className="link"
              href="http://localhost:3000/Entrance"
            >
              Выйти
            </a>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
