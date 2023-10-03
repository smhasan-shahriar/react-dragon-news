import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Root from '../layout/Root';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NewsDetailsPage from '../pages/NewsDetailsPage';

const PublicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/news/:id",
                element: <NewsDetailsPage></NewsDetailsPage>,
                loader: () => fetch('/news.json')
            }
        ]
    }
])

export default PublicRoutes;