import React, { useEffect, useState } from "react";

import { TaskFormula, Header } from "../../../common";
import { postman } from "../../../../utils/postman";

import "./style.scss";

function TaskComponents() {
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    postman
      .get("tasks/createArrayTasks", {
        params: {
          count: 1,
        },
      })
      .then((data) =>
        setCurrentData(Object.assign({}, currentData, { ...data[0] }))
      );
  }, []);

  const onClickGet = () => {
    postman
      .get("tasks/createArrayTasks", {
        params: {
          count: 1,
        },
      })
      .then((data) =>
        setCurrentData(Object.assign({}, currentData, { ...data[0] }))
      );
  };

  const onClickAdd = () => {
    postman
      .post("favourites/addedFavourites", {
        formula: currentData.formula,
        text: currentData.text,
        answer: currentData.answer,
        id: currentData.id,
      })
      .then((data) =>
        setCurrentData(Object.assign({}, currentData, { ...data[0] }))
      );
  };

  return (
    <div>
      <Header title="Задачи по химии" />
      <div className="containerTask">
        <div className="taskWord">Задачи</div>
        <TaskFormula
          formula={currentData?.formula}
          textFormula={currentData?.text}
          answer={currentData?.answer}
        />
        <div className="containerButton">
          <button onClick={onClickAdd} className="favouritesAdd">
            Добравить в избранное
          </button>
          <button onClick={onClickGet} className="text">
            Следующий
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskComponents;
