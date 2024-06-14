import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";
import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        user: userReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch