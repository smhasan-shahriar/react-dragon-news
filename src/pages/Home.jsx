import React from 'react';
import Header from '../components/Header';
import NewsBar from '../components/NewsBar';
import NavBar from '../components/NavBar';
import LeftSideBar from '../components/LeftSideBar';
import MainNewsBar from '../components/MainNewsBar';
import RightSideBar from '../components/RightSideBar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NewsBar></NewsBar>
            <NavBar></NavBar>
            <div className='mt-20 grid grid-cols-1 gap-7 md:grid-cols-4 max-w-[1140px] mx-auto'>
                <LeftSideBar></LeftSideBar>
                <MainNewsBar></MainNewsBar>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default Home;