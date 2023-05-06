import { configureStore } from "@reduxjs/toolkit";
import QuestionReducer from "./QuestionSlice";

const Store = configureStore({
  reducer: {
    questions: QuestionReducer,
  },
});

export default Store;
