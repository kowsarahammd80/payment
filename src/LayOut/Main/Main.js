import React from 'react';
import { Outlet } from 'react-router-dom';
import Nabbar from '../../Components/Sheard/Navbar/Nabbar';

const Main = () => {
    return (
        <div>
            <Nabbar/>
            <Outlet/>
        </div>
    );
};

export default Main;