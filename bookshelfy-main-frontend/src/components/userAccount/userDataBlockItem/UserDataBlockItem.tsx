import React from 'react';
import s from "../UserAccount.module.scss";
import InputGrey from "../../UI/inputs/InputGrey";


interface UserDataBlockItem  {
    title: string
}

const UserDataBlockItem:React.FC<UserDataBlockItem> = ({title}) => {

    return (
        <div className={s.userDataBlock__item}>
            <div className={s.userDataBlock__item__title}>
                {title}
            </div>
            <div className={s.userDataBlock__item__input}>
                <InputGrey />
            </div>
        </div>
    );
};

export default UserDataBlockItem;