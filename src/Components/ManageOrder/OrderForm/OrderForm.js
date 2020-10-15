import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './OrderForm.css';

const OrderForm = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {name, email, photoURL} = loggedInUser;

    const {handleSubmit} = useForm();



    const onSubmit = data => {

        fetch('https://mighty-bastion-72908.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Order success');
                }
            })
    }

    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>

            <div className="pt-5 ml-5 d-flex justify-content-between">
                    <h1 >Order</h1>
                    <h3 className="mr-5">{name}</h3>
                </div>

                <form className="customFormStyle" onSubmit={handleSubmit(onSubmit)}>
                    <div className="order-box p-5 mt-5">
                        <input className="form-control" type="text"  name="name" placeholder="Your name / company’s name" required/>
                        <input className="form-control" type="text"  name="email" placeholder="Your email address" required/>
                        <input className="form-control"type="text"  name="serviceName" placeholder="Product Name" />
                        <textarea rows="5" className="form-control" type="text" placeholder="Product Details" /><br />
                        <input className="form-control" type="number"  name="price" placeholder="Price" />
                        <input type="file" /><br/><br/>
                        <button type="submit" className="btn btnSubmit">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default OrderForm;