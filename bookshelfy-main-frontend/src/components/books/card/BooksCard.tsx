import React from 'react';
import s from './BooksCard.module.scss'
import closeIcon from '../../../assets/images/general/icons/closeWhite.svg'
import BooksMark from "../booksMark/BooksMark";
import {BookType} from "../../../types/types";

interface BooksCardProps {
    title: string
    marks?: Array<string>
    isDeleteIcon: boolean
    modalHandler: () => void
    setSelectedBook: (selectedBook: BookType) => void
    setSelectedBookId: (selectedBookId: number) => void
    booksId: number

}


const BooksCard:React.FC<BooksCardProps> = ({title, marks, isDeleteIcon= false, modalHandler, setSelectedBook,
                                                setSelectedBookId, booksId}) => {

    const deleteHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
       /* modalHandler();
        setSelectedBook(title)
        setSelectedBookId(booksId)*/
    }



    return (
        <div className={s.card}>
            <div className={s.card__body}>
                {isDeleteIcon &&
                    <div className={s.card__closeIcon} onClick={(e) => deleteHandler(e)}>
                        <img src={closeIcon} alt="delete"/>
                    </div>
                }
                <div className={s.card__text}>
                    {title}
                </div>
                <div className={s.marksBlock}>
                    {marks?.map((mark: string, key: number) => (
                        <BooksMark text={mark} key={key}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BooksCard;