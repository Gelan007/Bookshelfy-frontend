import {
    BOOKS_BOOK_PROFILE_ROUTE,
    BOOKS_LIST_ROUTE,
    BOOKS_ROUTE,
    HOME_ROUTE,
    USER_ACCOUNT_PERSONAL_DATA_ROUTE
} from "./consts";
import BooksPage from "../../pages/books/BooksPage";
import Home from "../../pages/home/Home";
import BooksContainer from "../../components/books/BooksContainer";
import UserAccountContainer from "../../components/userAccount/UserAccountContainer";
import BooksBookProfileContainer from "../../components/books/bookProfile/BooksBookProfileContainer";


export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    }
]


export const authRoutes = [
    {
        path: BOOKS_LIST_ROUTE,
        Component: BooksPage
    },
    {
        path: BOOKS_BOOK_PROFILE_ROUTE,
        Component: BooksBookProfileContainer
    },
    {
        path: USER_ACCOUNT_PERSONAL_DATA_ROUTE,
        Component: UserAccountContainer
    }
]