import {BOOKS_ROUTE, HOME_ROUTE} from "./consts";
import BooksPage from "../../pages/books/BooksPage";
import Home from "../../pages/home/Home";


export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    }
]


export const authRoutes = [
    {
        path: BOOKS_ROUTE,
        Component: BooksPage
    }
]