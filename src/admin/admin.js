import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: { value: JSON.parse(localStorage.getItem("data")) || {} },
  reducers: {
    card: (state, action) => {
      console.log(action.payload);
      if (action.payload.category in state.value) {
        const key = action.payload.category;
        delete action.payload.category;
        state.value[key].push(action.payload);
        localStorage.setItem("data", JSON.stringify(state.value));
      } else {
        return;
      }
    },
    category: (state, action) => {
      if (action.payload in state.value) {
        return;
      } else {
        state.value[action.payload] = [];
        localStorage.setItem("data", JSON.stringify(state.value));
      }
    },
  },
});
export const { card, category } = adminSlice.actions;
export default adminSlice.reducer;
