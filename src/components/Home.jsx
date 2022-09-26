import React from "react";
import Header from "./Header/Header";

const HomeLayout = props => (
    <div className="main-layout home-layout">
        <Header/>
        <div className="content">
            <h1>Home</h1>
        </div>
    </div>
);

export default HomeLayout;