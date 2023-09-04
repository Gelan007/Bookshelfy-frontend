import React, {ButtonHTMLAttributes} from 'react';
import s from "./Buttons.module.scss";


interface ButtonBlueProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const ButtonBlue:React.FC<ButtonBlueProps> = (props) => {
    return (
        <button className={s.buttonBlue} {...props}>

        </button>
    );
};

export default ButtonBlue;