import React, {RefObject, useEffect, useRef, useState} from 'react';
import Navbar from "./Navbar";

const NavbarContainer: React.FC = () => {

    const menuBody = useRef<null | HTMLElement>(null)
    const [burgerMenuState, setBurgerMenuState] = useState<boolean>(false);

    useEffect(() => {
        toggleBurgerMenu()
    }, [])

    function toggleBurgerMenu() {
        if (menuBody.current) {
            if (!burgerMenuState) {
                menuBody.current.style.pointerEvents = 'none';
                menuBody.current.style.opacity = '0';
                menuBody.current.style.userSelect = 'none';
                setBurgerMenuState(true);
            } else {
                menuBody.current.style.pointerEvents = 'all';
                menuBody.current.style.opacity = '100%';
                menuBody.current.style.userSelect = 'auto';
                setBurgerMenuState(false);
            }
        }
    }

    return (
        <Navbar menuBody={menuBody} toggleBurgerMenu={toggleBurgerMenu} burgerMenuState={burgerMenuState}/>
    );
};

export default NavbarContainer;