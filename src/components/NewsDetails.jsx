import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { CategoryContext } from '../layout/Root';

const NewsDetails = () => {
    const news = useLoaderData()
    const {id} = useParams()
    const {handleCategoryClick} = useContext(CategoryContext)
    const selectedNews = news.find(item => item._id === id);
    const navigate = useNavigate()


    return (
        <div className='col-span-3'>
            <h2 className='text-xl font-semibold'>Dragon News Home</h2>
            <div className='border p-7 my-6'>
                <img src={selectedNews.image_url} alt="" />
                <h2 className='text-2xl font-bold my-5 w-4/5'>{selectedNews.title}</h2>
                <p className='text-[#706F6F] mb-8'>{selectedNews.details}</p>
                <div className=''>
                
                <button onClick={()=> {handleCategoryClick(selectedNews.category_id); navigate('/')}} className='btn btn-secondary  bg-[#D72050] capitalize'> <FaArrowLeft /> All News in this category</button>
                </div>
               
            </div>


        </div>
    );
};

export default NewsDetails;