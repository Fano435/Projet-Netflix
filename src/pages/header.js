import React from "react";
import { Icon } from "@iconify/react";
import { FaBell } from 'react-icons/fa';






export const Header = () => {
    return (
        <header>
            <div className="leftpartofheader">
            <span><li><Icon icon="logos:netflix" /></li></span>
            <li>Home</li>
            <li>Movie</li>
            <li>Tv Shows</li>
            <li>My list</li>
            </div>
            <div className="rightpartofheader">
            <li><Icon icon="ci:search-magnifying-glass" /></li>
            <li>KIDS</li>
            <li>DVD</li>
            <li><FaBell/></li>
            <li></li>
            </div>
        </header>
    )
}



