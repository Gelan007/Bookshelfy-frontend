import {configureStore} from "@reduxjs/toolkit";
import booksReducer from "./reducers/books-reducer";
import userAccountSlice from "./slices/user-account-slice";

export const store = configureStore({
    reducer: {
        booksPage: booksReducer,
        userAccount: userAccountSlice
    },
    devTools: true
})

type StoreType = typeof store;
export type AppRootStateType = ReturnType<StoreType['getState']>;