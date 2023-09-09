import {BOOKS_BOOK_PROFILE_ROUTE, BOOKS_LIST_ROUTE, BOOKS_ROUTE, HOME_ROUTE} from "./consts";
import BooksPage from "../../pages/books/BooksPage";
import Home from "../../pages/home/Home";
import BooksContainer from "../../components/books/BooksContainer";


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
        Component: BooksContainer
    }
]