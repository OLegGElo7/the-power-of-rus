import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrSanyaCards: [],
  arrSanyaTwoCard: [],
  activeModal: true,
};

const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    setArrSanyaCards(state, action) {
      state.arrSanyaCards = action.payload;
    },
    setArrSanyaTwoCards(state, action) {
      state.arrSanyaTwoCard = action.payload;
    },
    setActiveModal(state, action) {
      state.activeModal = action.payload;
    },
  },
});

export const {
  setArrSanyaCards,
  setArrSanyaTwoCards,
  setSearchValue,
  setActiveModal,
} = slice.actions;
export default slice.reducer;
