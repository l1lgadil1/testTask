import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  category: "All",
  searchValue: "",
  popupActive: 0,
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setActivePopup(state, action) {
      state.popupActive = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setItems, setSearchValue, setCategory, setActivePopup } =
  itemSlice.actions;

export default itemSlice.reducer;
