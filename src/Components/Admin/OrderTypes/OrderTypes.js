import React, { useEffect } from 'react';
import { useState } from 'react';
import AllOrder from '../../ManageOrder/AllOrder/AllOrder';

const OrderTypes = () => {
    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch('https://mighty-bastion-72908.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])
    return (

        <div style={{ height: '100vh', background: '#F4F7FC' }} className="p-5">
            <div>
                <h1>Service List</h1>
            </div>

            <div>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div>
                {
                    order.map(data => <AllOrder data={data}></AllOrder>)
                }
            </div>


        </div>

    );
};

export default OrderTypes;
