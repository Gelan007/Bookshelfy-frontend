import React, {InputHTMLAttributes} from 'react';
import s from "./Inputs.module.scss";
import magnifierIcon from "../../../assets/images/general/icons/searchMagnifier.svg";

interface InputGreyProps extends InputHTMLAttributes<HTMLInputElement> {

}


const InputGrey:React.FC<InputGreyProps> = (props) => {
    return (
        <input className={s.inputGrey} {...props}/>
    );
};

export default InputGrey;