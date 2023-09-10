import React from 'react';
import s from "./AvatarPhoto.module.scss";
import defaultPhoto from '../../../assets/images/userAccount/profile.png'


type AvatarPhoto = {
    avatarPhoto: string | null
    handleFileChange: () => void
}

const AvatarPhoto:React.FC<AvatarPhoto> = ({avatarPhoto, handleFileChange}) => {
    return (
        <div className={s.avatarPhoto}>
            <div className={s.avatarPhoto__text}>Загрузить фото</div>
            <img src={!avatarPhoto ? defaultPhoto : avatarPhoto} alt="avatar"/>
            <input type="file" onChange={handleFileChange} className={s.avatarPhoto__input}/>
        </div>
    );
};

export default AvatarPhoto;