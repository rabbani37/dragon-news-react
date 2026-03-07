import React from 'react';
import Marquee from 'react-fast-marquee';
import NavBar from '../shared/NavBar/NavBar';

const BrackingNews = () => {
    return (
        <div className='flex items-center'>
            <button className='btn btn-error'>Bracking News</button>
            <Marquee speed={100} pauseOnHover={true}>Match Highlights: Germany vs Spain — as it happened .... Match Highlights: Germany vs Spain as...</Marquee>

        </div>
    );
};

export default BrackingNews;