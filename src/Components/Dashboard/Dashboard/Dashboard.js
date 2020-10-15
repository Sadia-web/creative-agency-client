import React from 'react';
import OrderTypes from '../../Admin/OrderTypes/OrderTypes';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {


    return (
        <section>

            <div className="row">
                <div>
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-6">
                    <OrderTypes></OrderTypes>
                </div>
            </div>

        </section>
    );
};

export default Dashboard;
