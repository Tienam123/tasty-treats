/* Default imports */

// Code...
import {FiShoppingCart} from 'react-icons/fi';
import React from 'react';
import { FaRegUser } from "react-icons/fa6";
import style from './ThemeSwitcher.module.scss'

export const ThemeSwitcher = ({theme,changeTheeme}) => {
    return (
        <>
            <FaRegUser className={style.user} size={26}/>
            <FiShoppingCart size={28}/>
            <label className={style.switcher}>
                <input type="checkbox" checked={theme} onChange={changeTheeme}  />
                <span></span>
            </label>
        </>
    );
};
