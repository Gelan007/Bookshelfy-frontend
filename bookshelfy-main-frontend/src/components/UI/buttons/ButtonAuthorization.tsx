import React, {ButtonHTMLAttributes} from 'react';
import s from "./Buttons.module.scss";


interface ButtonAuthorizationProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const ButtonAuthorization:React.FC<ButtonAuthorizationProps> = (props) => {
    return (
        <button className={s.buttonAuthorization} {...props}>

        </button>
    );
};

export default ButtonAuthorization;