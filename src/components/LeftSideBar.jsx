import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";
import { CategoryContext } from '../layout/Root';

const LeftSideBar = () => {
    const [categories, setCategories] = useState([])
    const [news, setNews] = useState([])
    const {category, handleCategoryClick} = useContext(CategoryContext)
    const [selectedCategory, setSelectedCategory] = useState("0")
    const handleClick = (id) => {
        setSelectedCategory(id)
    }
    const navigate = useNavigate()

    const handleCardClick = (id) => {
        navigate(`/news/${id}`)
    }

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
            <h2 className='text-xl font-semibold mb-5'>All Category</h2>
            <div>
                {
                    categories.map(category =>
                        <button onClick={() => { handleCategoryClick(category.id); handleClick(category.id); }} key={category.id} className={`block text-xl text-left font-semibold px-8 py-4 w-full ${
                            selectedCategory === category.id ? 'selected' : ''
                          }`}>{category.name}</button>)
                }
            </div>
            <div className='my-6'>
                {
                    sportsNews.slice(0,3).map((item, index) =>
                     <div onClick={() => handleCardClick(item._id)}  className='my-4' key={index}>
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