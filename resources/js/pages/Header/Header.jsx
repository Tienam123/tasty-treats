/* Default imports */

// Code...
import {HeaderStyled} from '@/pages/Header/Header.styled.js';
import {Link} from '@inertiajs/react';
import style from './Header.module.scss';
import {ThemeSwitcher} from '@/components/ThemeSwitcher/ThemeSwitcher.jsx';
import {NavBar} from '@/components/NavBar/NavBar.jsx';

export const Header = (props) => {
    const {
        changeTheme,
        theme,
    } = props;
    return (
        <HeaderStyled >
            <NavBar/>
            <Link href="/home" className={style.logo}><span>tasty</span>treats.</Link>
            <ThemeSwitcher theme={theme}
                           changeTheeme={changeTheme}/>

        </HeaderStyled>
    );
};
