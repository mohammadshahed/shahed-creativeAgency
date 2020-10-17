import React from 'react';
import './Companies.css';
import google from '../../../Images/google.png';
import airbnb from '../../../Images/airbnb.png';
import pathao from '../../../Images/pathao.png';
import shohoz from '../../../Images/shohoz.png';
import uber from '../../../Images/uber.png';

const Companies = () => {
    const companies = [shohoz, uber, google, pathao, airbnb];

    return (
        <section id="companies">
            <div className="container pb-5 d-flex justify-content-around flex-wrap">
                {
                    companies.map(company => <img key={company} src={company} alt="" className="my-2 mx-4" width="130px" height="50px" />)
                }
            </div>
        </section>
    );
};

export default Companies;