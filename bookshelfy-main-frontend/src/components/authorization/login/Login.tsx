import React from 'react';
import s from './Login.module.scss'
import InputAuthorization from "../../UI/inputs/authorization/InputAuthorization";
import userNameIcon from "../../../assets/images/inputs/icon_person.svg";
import passwordIcon from "../../../assets/images/inputs/icon_lock_locked.svg";
import AuthorizationForm from "../general/form/AuthorizationForm";
import background from '../../../assets/images/authorization/Background.png'
import {REGISTRATION_ROUTE} from "../../../utils/routes/consts";


type LoginProps = {}

const Login:React.FC<LoginProps> = () => {

    return (
        <div className={s.login} style={{backgroundImage: `url(${background})`}}>
            <div className={s.login__container}>
                <AuthorizationForm buttonText={"Войти"} textUnderButton={"Нет аккаунта? Зарегистрироваться"} linkOnTextUnderButton={REGISTRATION_ROUTE}>
                    <InputAuthorization icon={userNameIcon} placeholder={"username"}/>
                    <InputAuthorization icon={passwordIcon} placeholder={"password"}/>
                </AuthorizationForm>
            </div>
        </div>
    );
};

export default Login;