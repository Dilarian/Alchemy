import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Body, FormEntrance } from "../../../common";
import { Button, Input } from "../../../ui";
import { postman, setAccessToken } from "../../../../utils/postman";
import { ROUTE } from "../../../../utils/const";

import "./style.scss";

function RegistrationComponents() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const onChange = (ev) => {
    const { name, value } = ev.target;

    if (name === "Email") {
      setData(Object.assign({}, data, { email: value }));
    } else if (name === "Password") {
      setData(Object.assign({}, data, { password: value }));
    } else {
      setData(Object.assign({}, data, { name: value }));
    }
  };

  const onClickReg = () => {
    postman
      .post("auth/registration", {
        email: data.email,
        name: data.name,
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
        <FormEntrance arg="Регестрация">
          <div className="registration">
            <div>
              <Input
                placeholder={"E-Mail"}
                onChange={onChange}
                name={"Email"}
                value={data.email}
              />
              <Input
                placeholder={"Name"}
                onChange={onChange}
                name={"Name"}
                value={data.name}
              />
              <Input
                placeholder={"Password"}
                onChange={onChange}
                name={"Password"}
                value={data.password}
              />
            </div>
            <Button href="http://localhost:3000/task" onClick={onClickReg}>
              Зарегестрироваться
            </Button>
          </div>
        </FormEntrance>
      </div>
    </Body>
  );
}

export default RegistrationComponents;
