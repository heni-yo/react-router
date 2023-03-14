import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: { value: JSON.parse(localStorage.getItem("data")) || [] },
  reducers: {
    card: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("data", JSON.stringify(state.value));
    },
  },
});
export const { card } = adminSlice.actions;
export default adminSlice.reducer;
