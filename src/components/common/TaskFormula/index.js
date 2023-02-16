import React, { useState } from "react";

import "./style.scss";

function TaskFormula({ formula, textFormula, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="taskFormula">
      <div className="taskNumber">Задача</div>
      <div className="formula">{formula}</div>
      <div className="textFormula">{textFormula}</div>
      <button onClick={() => setOpen(!open)} className="answerClose">
        Ответ:
      </button>
      {open && <div className="answerOpen"> {answer} </div>}
    </div>
  );
}

export default TaskFormula;
