import React, {RefObject} from 'react';
import s from "./Navbar.module.scss";
import logo from "../../assets/images/navbar/logo.svg";
import burgerMenu from "../../assets/images/navbar/burger-menu.svg";
import burgerMenuActive from "../../assets/images/navbar/burger-menu-second.svg";
import {NavLink} from "react-router-dom";
import {BOOKS_ROUTE, HOME_ROUTE} from "../../utils/routes/consts";

interface NavbarProps {
    menuBody: null | RefObject<HTMLElement>
    toggleBurgerMenu: () => void
    burgerMenuState: boolean
}


const Navbar:React.FC<NavbarProps> = ({menuBody, toggleBurgerMenu, burgerMenuState}) => {
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
                            <NavLink to={BOOKS_ROUTE} className={({isActive}) => isActive ? `${s.menu__link} ${s.menu__link_active}` : s.menu__link}>
                                Книжки
                            </NavLink>
                        </li>
                        <li className={s.menu__item}>
                            <NavLink to={HOME_ROUTE} className={({isActive}) => isActive ? `${s.menu__link} ${s.menu__link_active}` : s.menu__link}>
                                Мой кабинет
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;