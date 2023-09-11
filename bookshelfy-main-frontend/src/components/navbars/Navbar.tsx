import React, {RefObject} from 'react';
import s from "./Navbar.module.scss";
import logo from "../../assets/images/navbar/logo.svg";
import userAccountLightBrown from "../../assets/images/navbar/personalAccountLightBrown.svg";
import userAccountBrown from "../../assets/images/navbar/personalAccountBrown.svg";
import burgerMenu from "../../assets/images/navbar/burger-menu.svg";
import burgerMenuActive from "../../assets/images/navbar/burger-menu-second.svg";
import {NavLink} from "react-router-dom";
import {
    BOOKS_LIST_ROUTE,
    BOOKS_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    USER_ACCOUNT_PERSONAL_DATA_ROUTE
} from "../../utils/routes/consts";
import ButtonLogin from "../UI/buttons/ButtonLogin";

interface NavbarProps {
    menuBody: null | RefObject<HTMLElement>
    toggleBurgerMenu: () => void
    burgerMenuState: boolean
    isAuth: boolean
}


const Navbar:React.FC<NavbarProps> = ({menuBody, toggleBurgerMenu, burgerMenuState, isAuth = false}) => {
    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <div className={s.logo}>
                    <div className={s.logo__picture}>
                        <img src={logo} alt="Bookshelfy"/>
                    </div>
                    <div className={s.logo__burgerMenu} onClick={toggleBurgerMenu}> {/*будет появляться сразу же, так как оно так по дизайну по дефолту */}
                        <img src={burgerMenuState ? burgerMenu  : burgerMenuActive } alt="burgerMenu"/>
                    </div>
                </div>
                <nav className={`${s.header__menu} ${s.menu}`} ref={menuBody}>
                    <ul className={s.menu__list}>
                        <li className={s.menu__item}>
                            <NavLink to={BOOKS_LIST_ROUTE} className={({isActive}) => isActive ? `${s.menu__link} ${s.menu__link_active}` : s.menu__link}>
                                Книжки
                            </NavLink>
                        </li>
                        <li className={s.menu__item}>
                            <NavLink to={USER_ACCOUNT_PERSONAL_DATA_ROUTE} className={({isActive}) => isActive ? `${s.menu__link} ${s.menu__link_active}` : s.menu__link}>
                                Личный кабинет
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={s.login}>
                    {isAuth ?
                        <NavLink to={USER_ACCOUNT_PERSONAL_DATA_ROUTE}
                                 className={({isActive}) => isActive ? `${s.login__userAccountIcon} ${s.login__userAccountIcon_active}` : s.login__userAccountIcon}>
                            <img src={userAccountBrown} alt="user Account"/>
                        </NavLink>
                        :
                        <NavLink to={LOGIN_ROUTE}
                                 className={s.login__buttonLogin}>
                            <ButtonLogin>Войти</ButtonLogin>
                        </NavLink>
                    }
                </div>
            </div>
        </header>
    );
};

export default Navbar;