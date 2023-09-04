import React, {ButtonHTMLAttributes} from 'react';
import s from './Buttons.module.scss'

interface ButtonGreenProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}


const ButtonGreen:React.FC<ButtonGreenProps> = (props) => {
    return (
        <button className={s.buttonGreen} {...props}>

        </button>
    );
};

export default ButtonGreen;