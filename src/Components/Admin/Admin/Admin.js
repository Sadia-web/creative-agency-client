import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderTypes from '../OrderTypes/OrderTypes';

const Admin = () => {
    return (
        <div className="row">

            <div>
                <Sidebar></Sidebar>
            </div>

            <div>
                <OrderTypes></OrderTypes>
            </div>
        </div>

    );
};

export default Admin;
