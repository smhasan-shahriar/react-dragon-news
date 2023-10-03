import React, { useContext, useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import { CategoryContext } from '../layout/Root';

const MainNewsBar = () => {
    const {category} = useContext(CategoryContext)
    const [news, setNews] = useState([])
    const [displayAll, setDisplayAll] = useState(false);

    useEffect(()=>{
        fetch('news.json')
        .then(response => response.json())
        .then(data => setNews(data.filter(item => {

            if(!category || category === '0'){
                return item; 
            }
            else{
                return item.category_id === category
            }
            })))

    },[news])


    
    return (
        <div className="col-span-2">
            <h2 className='text-xl font-semibold'>Dragon News Home</h2>
            <div>
                {
                    !displayAll ? news.slice(0,4).map((item, index) => <NewsCard key={index} item={item}></NewsCard>) :
                    news.map((item, index) => <NewsCard key={index} item={item}></NewsCard>)
                }
                {
                    news.length === 0 && <div className='h-[50vh] text-4xl mx-auto my-10 justify-center items-center'>No News in this category</div>
                }
            </div>
            <div className='text-center mx-auto'>
                {
                    news.length > 4 ?<button onClick={()=> setDisplayAll(!displayAll)} className='btn btn-ghost'>{!displayAll?'Show More': 'Show Less'}</button> : ''
                }
                
            </div>
        </div>
    );
};

export default MainNewsBar;