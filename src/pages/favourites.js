import React from "react";

import { Menu } from "../components/layout";
import FavouritesComponents from "../components/page/favourites/Card";

export default function Favourites() {
  return (
    <Menu>
      <FavouritesComponents />
    </Menu>
  );
}
