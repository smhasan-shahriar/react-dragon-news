import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const MainNewsBar = () => {
    const [news, setNews] = useState([])

    useEffect(()=>{
        fetch('news.json')
        .then(response => response.json())
        .then(data => setNews(data))

    },[])
    return (
        <div className="col-span-2">
            <h2 className='text-xl font-semibold'>Dragon News Home</h2>
            <div>
                {
                    news.map((item, index) => <NewsCard key={index} item={item}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default MainNewsBar;