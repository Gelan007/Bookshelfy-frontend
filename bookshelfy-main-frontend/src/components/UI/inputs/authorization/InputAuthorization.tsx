import React, {InputHTMLAttributes} from 'react';
import s from './Input.module.scss'
import magnifierIcon from "../../../../assets/images/general/icons/searchMagnifier.svg";

interface InputAuthorizationProps extends InputHTMLAttributes<HTMLInputElement> {
    icon: string
}


const InputAuthorization:React.FC<InputAuthorizationProps> = ({icon, ...props}) => {
    return (
        <input className={`${s.inputAuthorization} ${s.inputAuthorization__icon}`}
               style={{backgroundImage: `url(${icon})`}} {...props}/>
    );
};

export default InputAuthorization;