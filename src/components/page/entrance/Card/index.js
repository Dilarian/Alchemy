import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Body, FormEntrance } from "../../../common";
import { Button, Input } from "../../../ui";
import { postman, setAccessToken } from "../../../../utils/postman";
import { ROUTE } from "../../../../utils/const";

import "./style.scss";

function EntranceComponents() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onChange = (ev) => {
    const { name, value } = ev.target;

    if (name === "Email") {
      setData(Object.assign({}, data, { email: value }));
    } else {
      setData(Object.assign({}, data, { password: value }));
    }
  };
  const onClickEnt = () => {
    postman
      .post("/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then((data) => {
        localStorage.setItem("key", data.token);
        setAccessToken(data.token);
        navigate(ROUTE.task);
      });
  };
  return (
    <Body>
      <div className="mainBody">
        <FormEntrance arg="Вход">
          <div className="entrance">
            <div>
              <Input
                placeholder={"E-Mail"}
                onChange={onChange}
                name={"Email"}
                value={data.email}
              />
              <Input
                placeholder={"Password"}
                onChange={onChange}
                name={"Password"}
                value={data.password}
              />
              <a className="nextRegistration">Регестрация</a>
            </div>
            <Button onClick={onClickEnt}>Войти</Button>
          </div>
        </FormEntrance>
      </div>
    </Body>
  );
}

export default EntranceComponents;
