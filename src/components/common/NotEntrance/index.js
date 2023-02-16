import React from "react";

import "./sryle.scss";
import { Header } from "../index";

export default function NotEntrance() {
  return (
    <div>
      <Header children="Задачи по химии" />
      <div className="containerTask">
        <div className="taskWord">
          <p>Вход в аккаунт не выполнен</p>
          <a href="http://localhost:3000/entrance" className="registrationNext">
            Войти
          </a>
        </div>
      </div>
    </div>
  );
}
