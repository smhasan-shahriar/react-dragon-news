import React from 'react';

const NewsCard = ({item}) => {
    const {author, title, details, rating, image_url, thumbnail_url, total_views} = item
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default NewsCard;