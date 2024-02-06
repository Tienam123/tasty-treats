/* Default imports */

// Code...
import {FiShoppingCart} from 'react-icons/fi';
import React, {useState} from 'react';
import { FaRegUser } from "react-icons/fa6";
import style from './ThemeSwitcher.module.scss'

export const ThemeSwitcher = ({checked,setChecked}) => {


    const handleChange = (e) => {



    }
    return (
        <>
            <FaRegUser className={style.user} size={26}/>
            <FiShoppingCart size={28}/>
            <label className={style.switcher}>
                <input type="checkbox" checked={checked} onChange={setChecked}/>
                <span></span>
            </label>
        </>
    );
};
