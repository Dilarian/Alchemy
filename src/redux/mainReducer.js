import { createSlice, createSelector } from "@reduxjs/toolkit";

const mainReducer = createSlice({
  name: "mainReducer",
  initialState: {
    isActiveMenu: false,
  },
  reducers: {
    addNewStateMenu(state, data) {
      state.isActiveMenu = data.payload;
    },
  },
});

const baseUrl = (state) => state.mainReducer;

export const getIsActiveMenu = createSelector(
  [baseUrl],
  (state) => state.isActiveMenu
);

export default mainReducer.reducer;
export const { addNewStateMenu } = mainReducer.actions;
