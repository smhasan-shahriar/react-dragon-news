import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
export const CategoryContext = createContext("0")

const Root = () => {
    const [category, setCategory] = useState(null)

    const handleCategoryClick = id => {
        setCategory(`${id}`);
        
    }
    const myRef = {category, handleCategoryClick}

    return (
        <CategoryContext.Provider value = {myRef}>
            <div>
                <Outlet></Outlet>
            </div>
        </CategoryContext.Provider>
       
    );
};

export default Root;