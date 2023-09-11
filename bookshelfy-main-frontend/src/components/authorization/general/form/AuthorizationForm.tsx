import React, {ReactNode} from 'react';
import s from './AuthorizationForm.module.scss'
import ButtonAuthorization from "../../../UI/buttons/ButtonAuthorization";
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../../../../utils/routes/consts";


type AuthorizationForm = {
    children?: ReactNode
    buttonText: string
    textUnderButton: string
    linkOnTextUnderButton: string
}


const AuthorizationForm:React.FC<AuthorizationForm> = ({children, buttonText, linkOnTextUnderButton, textUnderButton, ...props}) => {
    return (
        <div className={s.form}>
            <div className={s.inputs}>
                {children}
            </div>
            <div className={s.bottomBlock}>
                <div className={s.bottomBlock__button}>
                    <ButtonAuthorization>{buttonText}</ButtonAuthorization>
                </div>
                <Link to={linkOnTextUnderButton} className={s.bottomBlock__text}>{textUnderButton}</Link>
            </div>
            <Link to={HOME_ROUTE} className={s.back}>
                На главную
            </Link>
        </div>
    );
};

export default AuthorizationForm;