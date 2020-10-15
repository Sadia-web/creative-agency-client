import React, { useEffect, useState}  from 'react';
import Review from '../Review/Review';

const Reviews = () => {


    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://mighty-bastion-72908.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // const review = [
    //     {
    //         id: 0,
    //         image: 'https://i.ibb.co/YBCRs6N/customer-1.png',
    //         name: "Nash Patrik",
    //         title: "CEO, Manpol",
    //         review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum incidunt nihil id, rem explicabo maiores repudiandae?"
    //     },
    //     {
    //         id: 1,
    //         image: 'https://i.ibb.co/gvsgtgc/customer-2.png',

    //         name: "Miriam Barron",
    //         title: "CEO, Manpol",
    //         review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum incidunt nihil id, rem explicabo maiores repudiandae?"
    //     },
    //     {
    //         id: 2,
    //         image: 'https://i.ibb.co/BPKVsJz/customer-3.png',
    //         name: "Bria Malone",
    //         title: "CEO, Manpol",
    //         review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum incidunt nihil id, rem explicabo maiores repudiandae?"
    //     }

    // ];

    return (
        <section style={{ margin: 150}}>
            <div className="container">
                <div>
                    <h1 className="text-center">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>
                </div>

                <div className="card-deck mt-5">
                    {
                        reviews.map(reviewData => <Review reviewData={reviewData} key={reviewData._id}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;