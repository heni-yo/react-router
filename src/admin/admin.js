import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: { value: JSON.parse(localStorage.getItem("data")) || [],test: JSON.parse(localStorage.getItem("daata")) || [] },
  reducers: {
    card: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("data", JSON.stringify(state.value));
    },
    category: (state, action) => {
      state.test.push(action.payload)
      localStorage.setItem("daata", JSON.stringify(state.test));
    },
  },
});
export const { card, category } = adminSlice.actions;
export default adminSlice.reducer;
