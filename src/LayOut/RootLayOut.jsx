import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const RootLayOut = () => {
    return (
        <div>
             <Outlet />
             <Footer />
        </div>
    );
};

export default RootLayOut;