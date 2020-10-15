import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const PostReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const  { name, email, photoURL} = loggedInUser;

    const onSubmit = data => {
        data.userImage = photoURL;

        console.log(data);
        fetch('https://mighty-bastion-72908.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Review post successfully.')
                }
            })

    }
    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>
                <div className="pt-5 ml-5 d-flex justify-content-between">
                    <h1 >Review</h1>
                    <h3 className="mr-5">{name}</h3>
                </div>

                <form className="customFormStyle" >
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Company’s name, Designation" />
                    </div>

                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="6" placeholder="Description"></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default PostReview;
