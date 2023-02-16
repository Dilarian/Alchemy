import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { Entrance, Registration, Task, Favourites } from "../pages";
import { ROUTE } from "../utils/const";

export default function MainRoute() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !localStorage.getItem("key") &&
      location.pathname !== ROUTE.entrance &&
      location.pathname !== ROUTE.registration
    ) {
      navigate(ROUTE.entrance);
    }
  }, [location]);

  return (
    <Routes>
      <Route exact path={ROUTE.entrance} element={<Entrance />} />
      <Route exact path={ROUTE.registration} element={<Registration />} />
      <Route exact path={ROUTE.task} element={<Task />} />
      <Route exact path={ROUTE.favourites} element={<Favourites />} />
      <Route exact path={"*"} element={<Entrance />} />
    </Routes>
  );
}
