import React from "react";
import { CATEGORIES } from "../../constants/categories";
import HeaderButton from "./HeaderButton";

const Header = () => {
    const displayTab = [];
    CATEGORIES.forEach(element => {
        displayTab.push(<HeaderButton name={element.name} link={element.link} key={element.name} />)
    });
    return (
        <header>
            {displayTab}
        </header>
    );
}
export default Header;