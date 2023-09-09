import React, {useEffect} from 'react';
import Books from "./Books";
import {connect} from "react-redux";
import {getAllBooks, setSelectedBook, setSelectedBookId} from "../../redux/reducers/books-reducer";
import {AppRootStateType} from "../../redux/store";
import {BookType} from "../../types/types";


//пропсы которые из state приходят
type MapStatePropsType = {
    allBooks: Array<BookType> | null
}

//пропсы колбэки которые из state приходят
type MapDispatchPropsType = {
    getAllBooks: (authorId?:number, isAlreadyRead?:boolean) => void
    setSelectedBook: (selectedBook: BookType) => void
    setSelectedBookId: (selectedBookId: number) => void
}

// Пропсы, которые через атрибуты передаются
type OwnPropsType = {
}

type BooksContainerProps = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const BooksContainer:React.FC<BooksContainerProps> = (props) => {

    useEffect(() => {
        props.getAllBooks()
    }, [])

   /* useEffect(() => {
        console.log(props.allBooks)
    }, [props.allBooks])
*/

    return (
        <Books books={props.allBooks} isDeleteIcon={true} setSelectedBookId={props.setSelectedBookId} setSelectedBook={props.setSelectedBook}/>
    );
};

const mapStateToProps = (state:AppRootStateType):MapStatePropsType => {
    return {
        allBooks: state.booksPage.allBooks
    }
}

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppRootStateType>
(mapStateToProps, {getAllBooks, setSelectedBook, setSelectedBookId})(BooksContainer);
