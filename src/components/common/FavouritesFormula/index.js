import React, { useState, useEffect } from "react";
import { postman } from "../../../utils/postman";

import "./style.scss";

export default function FavouritesFormula({
  formula,
  textFormula,
  answer,
  id,
  deleteTask,
}) {
  const [open, setOpen] = useState(false);

  const onClickDelete = () => {
    postman.delete("favourites/deleteFavourites", {
      params: {
        id: id,
      },
    });
    deleteTask(id);
  };

  return (
    <div className="taskFormula">
      <div className="taskNumber">
        Задача
        <div className="iconDelete"></div>
      </div>
      <div className="formula">{formula}</div>
      <div className="textFormula">{textFormula}</div>
      <button onClick={() => setOpen(!open)} className="answerClose">
        Ответ:
      </button>
      <button onClick={onClickDelete} className="deleteFavourites">
        Удалить
      </button>
      {open && <div className="answerOpen"> {answer} </div>}
    </div>
  );
}
