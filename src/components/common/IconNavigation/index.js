import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNewStateMenu, getIsActiveMenu } from "../../../redux/mainReducer";

import "./style.scss";

export default function IconNavigation() {
  const isActiveMenu = useSelector(getIsActiveMenu);
  const dispatch = useDispatch();

  const onClickMenu = (ev) => {
    ev.stopPropagation();
    dispatch(addNewStateMenu(!isActiveMenu));
  };

  return (
    <div className="menu-btn" onClick={onClickMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
