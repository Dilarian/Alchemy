import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Navigation } from "../../common";
import { getIsActiveMenu, addNewStateMenu } from "../../../redux/mainReducer";

export default function Menu({ children }) {
  const dispatch = useDispatch();
  const isActiveMenu = useSelector(getIsActiveMenu);

  const onClickHiddenMenu = () => {
    dispatch(addNewStateMenu(false));
  };

  return (
    <div onClick={onClickHiddenMenu}>
      {isActiveMenu && <Navigation />}
      {children}
    </div>
  );
}
