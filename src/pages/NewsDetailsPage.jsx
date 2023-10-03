import React from 'react';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import NewsDetails from '../components/NewsDetails';
import RightSideBar from '../components/RightSideBar';

const NewsDetailsPage = () => {
    return (
        <div className='max-w-[1140px] mx-auto'>
            <Header></Header>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <NewsDetails></NewsDetails>
                <RightSideBar></RightSideBar>
            </div>
            
        </div>
    );
};

export default NewsDetailsPage;