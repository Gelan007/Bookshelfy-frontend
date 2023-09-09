import React from 'react';
import s from './UserAccount.module.scss'
import InputGrey from "../UI/inputs/InputGrey";
import UserDataBlockItem from "./userDataBlockItem/UserDataBlockItem";
import ButtonGreen from "../UI/buttons/ButtonGreen";
import ButtonExit from "../UI/buttons/ButtonExit";

type UserAccountProps = {
    isUser: boolean
    firstName: string
    lastName: string
}

const UserAccount:React.FC<UserAccountProps> = ({isUser, firstName = "Noname", lastName}) => {
    const buttonHandler = () => {}

    return (
        <div className={s.userAccount}>
            <div className={s.userAccount__container}>
                <div className={s.avatarBlock}>
                    <div className={s.avatarBlock__avatar}>
                        <img src="" alt=""/>
                    </div>
                    <div className={s.avatarBlock__text}>
                        <span>{`${firstName} ${lastName}`}</span>
                        {isUser ? <span>Без подписки</span> : <span>Администратор</span>}
                    </div>
                </div>
                <div className={s.userDataBlock}>
                    <div className={s.userDataBlock__row}>
                        <UserDataBlockItem title="Имя"/>
                        <UserDataBlockItem title="Фамилия"/>
                    </div>
                    <div className={s.userDataBlock__row}>
                        <UserDataBlockItem title="Почта"/>
                        <UserDataBlockItem title="Имя пользователя"/>
                    </div>
                </div>
                <div className={s.buttonSave}>
                    <div className={s.buttonSave__container}>
                        <ButtonGreen style={{height: '50px'}} onClick={buttonHandler}>Сохранить</ButtonGreen>
                    </div>
                </div>
                <div className={s.buttonExit}>
                    <ButtonExit/>
                </div>
            </div>
        </div>
    );
};

export default UserAccount;