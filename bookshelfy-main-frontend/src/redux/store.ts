import {configureStore} from "@reduxjs/toolkit";
import booksReducer from "./reducers/books-reducer";

export const store = configureStore({
    reducer: {
        booksPage: booksReducer,
    },
    devTools: true
})

type StoreType = typeof store;
export type AppRootStateType = ReturnType<StoreType['getState']>;