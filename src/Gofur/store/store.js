import { configureStore } from"@reduxjs/toolkit";
import feedbacksSlice from "../components/feedbacks-slice/feedbacks-slice";


export const store = configureStore({
    reducer:{
        feedbacks:feedbacksSlice,
    }
})