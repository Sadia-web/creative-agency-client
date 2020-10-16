import React from 'react';


const ContactForm = () => {
    return (
        <main style={{ height: '600px', background: '#FBD062' }} className="row p-2" id="contactUs">
            <div className="col-md-4 offset-md-1 mt-5">
                <h1>Let us handle your <br /> project, professionally.</h1>
                <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general. </p>
            </div>
            <div className="col-md-6 mt-5">
                <form action="">
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Your email address " />
                    </div>
                    <div className="form-group">
                        <input type="name" className="form-control" placeholder="Your name / company’s name " />
                    </div>
                    <div className="form-group">
                        <textarea name="message" className="form-control" id="" rows="7" placeholder="Your message "></textarea>
                    </div>
                    <div className="form-group">
                        <button className="custom-btn"> Send </button>
                    </div>
                </form>
            </div>

        </main>
    );
};

export default ContactForm;