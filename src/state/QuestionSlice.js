import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "questionSlice",
  initialState: {
    data: [],
  },
  reducers: {
    addData: (state, action) => {
      const x = action.payload;
      state.data = [...x];
      console.log(x);
    },
  },
});

export const { addData } = questionSlice.actions;
export default questionSlice.reducer;
