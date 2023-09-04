import React, {InputHTMLAttributes} from 'react';
import s from './Inputs.module.scss'
import magnifierIcon from '../../../assets/images/general/icons/searchMagnifier.svg'


interface InputGreySearchProps extends InputHTMLAttributes<HTMLInputElement> {

}

const InputGreySearch:React.FC<InputGreySearchProps> = (props) => {
    return (
        <input className={`${s.inputGreySearch} ${s.inputGreySearch__magnifier}`}
               style={{backgroundImage: `url(${magnifierIcon})`}} {...props}/>
    );
};

export default InputGreySearch;