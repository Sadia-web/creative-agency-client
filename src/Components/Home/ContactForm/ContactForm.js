import React from 'react';


const ContactForm = () => {
    return (
        <main style={{ height: '700px', background: '#FBD062' }} className="row p-2">
            <div className="col-md-4 offset-md-1 mt-5">
                <h1>Let us handle your <br /> project, professionally.</h1>
                <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general. </p>
            </div>
            <div className="col-md-6 mt-5">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your email address " />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your name / company’s name " />
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message "></textarea>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-dark"> Send </button>
                    </div>
                </form>
            </div>

        </main>
    );
};

export default ContactForm;