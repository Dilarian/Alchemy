import React from "react";

import { Menu } from "../components/layout";
import TaskComponents from "../components/page/task/Card";

export default function Task() {
  return (
    <Menu>
      <TaskComponents />
    </Menu>
  );
}
