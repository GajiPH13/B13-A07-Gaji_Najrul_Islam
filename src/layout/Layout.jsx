import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/footer';
const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;