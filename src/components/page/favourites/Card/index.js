import React, { useEffect, useState } from "react";
import { Header } from "../../../common";

import "./style.scss";
import { postman } from "../../../../utils/postman";
import FavouritesFormula from "../../../common/FavouritesFormula";

function FavouritesComponents() {
  const [currentPage, setCurrentPage] = useState(1);
  const [favoritesData, setFavoritesData] = useState({});

  const onClickNext = () => {
    postman
      .get("favourites/getAllFavourites", {
        params: {
          count: 3,
          page: currentPage + 1,
        },
      })
      .then((data) => {
        setCurrentPage(currentPage + 1);
        setFavoritesData(Object.assign({}, favoritesData, { ...data }));
      });
  };

  const onClickBack = () => {
    postman
      .get("favourites/getAllFavourites", {
        params: {
          count: 3,
          page: currentPage - 1,
        },
      })
      .then((data) => {
        setCurrentPage(currentPage - 1);
        setFavoritesData(Object.assign({}, favoritesData, { ...data }));
      });
  };

  const deleteTask = (id) => {
    const newArray = { ...favoritesData };

    newArray.array = newArray.array
      .map((item) => {
        if (item.id !== id) {
          return item;
        }
      })
      ?.filter((item) => item);

    setFavoritesData(newArray);
  };

  useEffect(() => {
    postman
      .get("favourites/getAllFavourites", {
        params: {
          count: 3,
          page: currentPage,
        },
      })
      .then((data) => {
        setFavoritesData(Object.assign({}, favoritesData, { ...data }));
      });
  }, []);

  return (
    <div>
      <Header title="Задачи по химии" />
      <div className="containerFavourites">
        <div className="taskFormula">
          <div className="taskFavourites">Избранное</div>
          {favoritesData?.array?.map((item) => (
            <FavouritesFormula
              key={item?.id}
              id={item?.id}
              answer={item?.answer}
              formula={item?.formula}
              textFormula={item?.text}
              deleteTask={deleteTask}
            />
          ))}
          {<div onClick={onClickNext}>Next</div>}
          {<div onClick={onClickBack}>Back</div>}
        </div>
      </div>
    </div>
  );
}

export default FavouritesComponents;
