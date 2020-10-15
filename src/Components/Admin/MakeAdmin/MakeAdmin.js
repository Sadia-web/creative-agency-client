import React, {useContext} from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { name, email, photoURL} = loggedInUser;

    const {handleSubmit} = useForm();

    const onSubmit = data => {
        fetch('https://mighty-bastion-72908.herokuapp.com/adminEmail', { 
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                alert('Email Add')
            }
        })
    }
    return (
        <div className="row">

            <Sidebar></Sidebar>


            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>

                <div className="pt-5 ml-5 d-flex justify-content-between">
                    <h1>Add Admin</h1>
                    <h3 className="mr-5">{name}</h3>
                </div>

                <div className="customFormStyle">
                    <div className="form-group bg-white p-5" style={{ width: '800px' }}>

                        <label htmlFor="">Email</label>
                        <form class="form-inline" onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-group mx-sm-3 mb-2">
                                <input type="email" name="email" class="form-control" id="" placeholder="Enter Your Email" />
                            </div>
                            <button type="submit" class="btn btn-success mb-2">Submit</button>

                        </form>
                    </div>
                </div>




            </div>
        </div >
    );
};

export default MakeAdmin;