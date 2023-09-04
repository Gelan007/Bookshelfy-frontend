import React from 'react';
import InputGreySearch from "../UI/inputs/InputGreySearch";
import ButtonGreen from "../UI/buttons/ButtonGreen";
import ButtonBlue from "../UI/buttons/ButtonBlue";
import s from './Books.module.scss'



const Books = () => {
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

            </div>
        </div>
    );
};

export default Books;