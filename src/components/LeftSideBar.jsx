import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideBar = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(()=> {
        fetch('categories.json')
        .then(response => response.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className='text-xl font-semibold'>All Category</h2>
            {
                categories.map(category =>
                    <NavLink key={category.id} className={`block text-xl font-semibold px-12 py-4`}>{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideBar;