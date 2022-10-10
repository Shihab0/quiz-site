import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navbar from '../../components/NavBar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;