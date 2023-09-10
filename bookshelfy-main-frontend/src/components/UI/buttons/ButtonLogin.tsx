import React, {ButtonHTMLAttributes} from 'react';
import s from "./Buttons.module.scss";

interface ButtonLoginProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}


const ButtonLogin:React.FC<ButtonLoginProps> = (props) => {
    return (
        <button className={s.buttonLogin} {...props}>

        </button>
    );
};

export default ButtonLogin;