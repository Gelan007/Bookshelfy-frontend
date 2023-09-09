import React, {useEffect, useState} from 'react';
import InputGreySearch from "../UI/inputs/InputGreySearch";
import ButtonGreen from "../UI/buttons/ButtonGreen";
import ButtonBlue from "../UI/buttons/ButtonBlue";
import s from './Books.module.scss'
import {NavLink} from "react-router-dom";
import {Grid} from "@mui/material";
import BooksCard from "./card/BooksCard";
import {BookType} from "../../types/types";
import {BOOKS_BOOK_PROFILE_ROUTE} from "../../utils/routes/consts";


interface BooksProps {
    books: Array<BookType> | null
    isDeleteIcon: boolean
    setSelectedBook: (selectedBook: BookType) => void
    setSelectedBookId: (selectedBookId: number) => void
}



const Books:React.FC<BooksProps> = ({books, isDeleteIcon = false, setSelectedBook, setSelectedBookId}) => {

    const [isModalActive, setIsModalActive] = useState(false);
    const modalHandler = () => isModalActive ? setIsModalActive(false) : setIsModalActive(true)
    return (

        <div className={s.books}>
            <div className={s.topBlock}>
                <div className={s.topBlock__search}>
                    <InputGreySearch/>
                </div>
                <div className={s.topBlock__controlButtonsBlock}>
                    <ButtonGreen>Добавить</ButtonGreen>
                    <ButtonBlue>Редактировать</ButtonBlue>
                </div>
            </div>
            <div className={s.mainBlock}>
                <Grid container spacing={2}>
                    {books?.map(((book, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index} >
                            <NavLink to={`${BOOKS_BOOK_PROFILE_ROUTE}/${book.id}`}>
                                <BooksCard isDeleteIcon={isDeleteIcon}
                                              title={book.name}
                                              marks={book.marks}
                                              modalHandler={modalHandler}
                                              setSelectedBook={setSelectedBook}
                                              setSelectedBookId={setSelectedBookId}
                                              booksId={book.id}
                                />
                            </NavLink>
                        </Grid>
                    )))}
                </Grid>
            </div>
        </div>
    );
};

export default Books;