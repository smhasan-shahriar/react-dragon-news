import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";

const LeftSideBar = () => {
    const [categories, setCategories] = useState([])
    const [news, setNews] = useState([])
    
    
    useEffect(()=> {
        fetch('categories.json')
        .then(response => response.json())
        .then(data => setCategories(data))

        fetch('news.json')
        .then(response => response.json())
        .then(data => setNews(data))
    }, [])

    const sportsNews = news.filter(item => item.category_id === "4")
    return (
        <div>
            <h2 className='text-xl font-semibold'>All Category</h2>
            {
                categories.map(category =>
                    <NavLink key={category.id} className={`block text-xl font-semibold px-12 py-4`}>{category.name}</NavLink>)
            }
            <div className='my-6'>
                {
                    sportsNews.slice(0,3).map((item, index) =>
                     <div className='my-4' key={index}>
                        <img className='w-full' src={item.image_url} alt="" />
                        <h2 className='my-5 font-semibold text-xl'>{item.title}</h2>
                        <div className='flex items-center justify-between'>
                            <h4>Sports</h4>
                            <div className='flex items-center text-[#9F9F9F]'>
                                <FaCalendarAlt/>
                                <p>{item.author.published_date}</p>
                            </div>
                        </div>
                     </div>)
                }
            </div>
        </div>
    );
};

export default LeftSideBar;