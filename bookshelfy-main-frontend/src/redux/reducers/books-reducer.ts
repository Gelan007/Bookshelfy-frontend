import {booksAPI} from "../../api/books";
import {BookType} from "../../types/types";

//const SET_USER_BOOKS = 'SET_USER_BOOKS'
const SET_ALL_BOOKS = 'SET_ALL_BOOKS'
const SET_SELECTED_BOOK = 'SET_SELECTED_BOOK'
const SET_SELECTED_BOOK_ID = 'SET_SELECTED_BOOK_ID'





/*export type InitialStateType = {
    allBooks: Array<AllBooksType> | null
}*/

let initialState = {
    allBooks: [] as Array<BookType> | null,
    selectedBook: {} as BookType | null,
    selectedBookId: null as number | null
}
export type InitialStateType = typeof initialState



const booksReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case SET_ALL_BOOKS:
            return {
                ...state,
                allBooks: Array.isArray(action.allBooks) ? [...action.allBooks] : state.allBooks
            }
        case SET_SELECTED_BOOK:
            return {
                ...state,
                selectedBook: action.selectedBook
            }
        case SET_SELECTED_BOOK_ID:
            return {
                ...state,
                selectedBookId: action.selectedBookId
            }
        default:
            return state;
    }
}

//export const setUserBooks = (userBooks) => ({type: SET_USER_BOOKS, userBooks})


type setAllBooksActionType = {
    type: typeof SET_ALL_BOOKS
    allBooks: Array<BookType>
}
export const setAllBooks = (allBooks: Array<BookType>): setAllBooksActionType => ({type: SET_ALL_BOOKS, allBooks})
type setSelectedBookActionType = {
    type: typeof SET_SELECTED_BOOK
    selectedBook: BookType
}
export const setSelectedBook = (selectedBook: BookType): setSelectedBookActionType => ({type: SET_SELECTED_BOOK, selectedBook})
type setSelectedBookIdActionType = {
    type: typeof SET_SELECTED_BOOK_ID
    selectedBookId: number
}
export const setSelectedBookId = (selectedBookId: number): setSelectedBookIdActionType => ({type: SET_SELECTED_BOOK_ID, selectedBookId})



export const getAllBooks = (authorId?: number, isAlreadyRead?: boolean) => {
    return (dispatch: any) => {
        booksAPI.getAllBooks(authorId, isAlreadyRead)
            .then((response) => {
                if(response.status >= 200 && response.status <= 300) {
                    dispatch(setAllBooks(response.data.rows))
                }
            })
    }
}

export default booksReducer;








