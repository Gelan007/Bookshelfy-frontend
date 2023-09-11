import React from 'react';
import s from "./Registration.module.scss";
import background from "../../../assets/images/authorization/Background.png";
import AuthorizationForm from "../general/form/AuthorizationForm";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../../utils/routes/consts";
import InputAuthorization from "../../UI/inputs/authorization/InputAuthorization";
import userNameIcon from "../../../assets/images/inputs/icon_person.svg";
import passwordIcon from "../../../assets/images/inputs/icon_lock_locked.svg";
import cardWhite from "../../../assets/images/inputs/card_whiteBlack.svg";
import cardBlue from "../../../assets/images/inputs/card_blue.svg";


type RegistrationProps = {}

const Registration:React.FC<RegistrationProps> = () => {
    return (
        <div className={s.registration} style={{backgroundImage: `url(${background})`}}>
            <div className={s.registration__container}>
                <AuthorizationForm buttonText={"Войти"} textUnderButton={"Есть аккаунт? Войти"} linkOnTextUnderButton={LOGIN_ROUTE}>
                    <InputAuthorization icon={userNameIcon} placeholder={"username"}/>
                    <InputAuthorization icon={passwordIcon} placeholder={"password"}/>
                    <InputAuthorization icon={cardWhite} placeholder={"firstName"}/>
                    <InputAuthorization icon={cardWhite} placeholder={"lastName"}/>
                </AuthorizationForm>
            </div>
        </div>
    );
};

export default Registration;