import React from 'react';
import AllServices from '../AllServices/AllServices';

const servicesData = [
    {
        id: 0,
        image: 'https://i.ibb.co/Gnvt5Rh/service1.png',
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.',
    },
    {
        id: 1,
        image: 'https://i.ibb.co/rM3Ypvb/service2.png',
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
    },
    {
        id: 2,
        image: 'https://i.ibb.co/cc8qq6s/service3.png',
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    }
    // {
    //     id:3,
    //     image: 'https://i.ibb.co/7YpkVCp/service4.png',
    //     title: 'Web Design',
    //     description: 'lorem ipsum dolor'

    // },
    // {
    //     id:4,
    //     image: 'https://i.ibb.co/pn1QXDq/service5.png',
    //     title: 'Problem Solving & Programming',
    //     description: 'Lorem, ipsum dolor'
    // }


];

const Services = () => {
    return (
        <div className="container text-center" style={{ marginTop: '150px', marginBottom: '50px' }}>
            <h1 className="mb-5">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>

            <div className="d-flex">
                {
                    servicesData.map(allServices => <AllServices allServices={allServices} key={allServices.id}></AllServices>)
                }
            </div>
        </div>
    );
};

export default Services;
