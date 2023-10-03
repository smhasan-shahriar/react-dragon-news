import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const MainNewsBar = () => {
    const [news, setNews] = useState([])
    const [displayAll, setDisplayAll] = useState(false)

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
                    !displayAll ? news.slice(0,4).map((item, index) => <NewsCard key={index} item={item}></NewsCard>) :
                    news.map((item, index) => <NewsCard key={index} item={item}></NewsCard>)
                }
            </div>
            <div className='text-center mx-auto'>
                <button onClick={()=> setDisplayAll(!displayAll)} className='btn btn-ghost'>{!displayAll?'Show More': 'Show Less'}</button>
            </div>
        </div>
    );
};

export default MainNewsBar;