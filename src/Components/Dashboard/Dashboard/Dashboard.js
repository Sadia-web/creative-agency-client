import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;