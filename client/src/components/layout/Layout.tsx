import React from 'react';
import Header from "../header/Header";
import {Outlet} from "react-router-dom";
import s from './layout.module.scss'
import Footer from "../footer/Footer";


const Layout = () => {
    return (
        <div className={s.wrapper}>
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Layout;