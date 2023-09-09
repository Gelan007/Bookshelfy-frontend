import React from 'react';
import s from './Buttons.module.scss'
import exitIcon from '../../../assets/images/general/icons/exit.svg'


const ButtonExit = ({text = 'Выйти', ...props}) => {
    return (
        <div className={s.buttonExit}>
            <div className={s.buttonExit__icon}>
                <img src={exitIcon} alt="exitIcon"/>
            </div>
            <span>{text}</span>
        </div>
    );
};

export default ButtonExit;