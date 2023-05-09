import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "questionSlice",
  initialState: {
    data: [],
  },
  reducers: {
    // addData: (state, action) => {
    //   const x = action.payload;
    //   const newX = x.map((ele) => {
    //     let random = Math.floor(Math.random() * 4);
    //     const obj = {
    //       question: ele.question,
    //       correct_answer: ele.correct_answer,
    //       options: ele.incorrect_answers,
    //     };
    //     obj.options.splice(random, 0, ele.correct_answer);
    //     return obj;
    //   });
    //   state.data = [...newX];
    // },
    setQestionData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setQestionData } = questionSlice.actions;
export default questionSlice.reducer;
