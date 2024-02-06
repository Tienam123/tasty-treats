/* Default imports */

// Code...
import {NavBarStyled} from '@/components/NavBar/NavBar.styled.js';
import {Link, usePage} from '@inertiajs/react';
import style from './NavBar.module.scss';

export const NavBar = () => {
    const {url,component} = usePage();
    return (
        <NavBarStyled>
            <Link href="/home"
                  className={url.startsWith('/home')
                      ? `${style.active}`
                      : ''}>Home</Link>
            <Link href="/favorites"
                  className={url.startsWith('/favorites')
                      ? `${style.active}`
                      : ''}>Favorites</Link>

        </NavBarStyled>
    );
};
