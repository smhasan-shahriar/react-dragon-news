import React, { useState } from 'react';
import { FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import ReactDOM from 'react-dom';

import ReactStarsRating from 'react-awesome-stars-rating';

const ReactStarsExample = ({ value }) => {
    return <ReactStarsRating className="flex" value={value} />;
  };

const NewsCard = ({item}) => {
    const {author, title, details, rating, image_url, thumbnail_url, total_view} = item
    const [showFull, setShowFull] = useState(false);
    const detailNews = details
    const words = detailNews.split(' ');
    const trucatedText = showFull ? detailNews : words.slice(0, 40).join(" ")
    const toggleText = () => {
        setShowFull(!showFull);
    }
    return (
        <div className='my-6'>
            {/* author section  */}
            <div className='flex justify-between w-full border items-center bg-[#F3F3F3] p-4'>
                <div className='flex gap-3 items-center'>
                    <img className='w-10 h-10 rounded-full' src={author.img} alt="" />
                    <div>
                        <h4 className='font-semibold'>{author.name}</h4>
                        <p className='text-[#706F6F] text-sm'>{author.published_date}</p>
                    </div>
                 
                </div>
                <div className='flex gap-1'>
                        <FaRegBookmark/>
                        <FaShareAlt />
                    </div>
            </div>
            {/* news section  */}
            <h1 className='my-4 text-xl font-bold'>{title}</h1>
            <img src={image_url} alt="" />
            <div className='my-6'>
                <p>{trucatedText}</p>
                {
                    words.length > 40 && (
                        <button className='text-[#FF8C47] font-semibold' onClick={toggleText}>
                            {showFull ? "Read Less" : "Read More"}
                        </button>
                    )
                }
            </div>
            <hr />
            <div className='flex justify-between items-center'>
                <div className='my-5 flex gap-3'>
                    <ReactStarsExample value={rating.number} />
                    <p>{rating.number}</p>
                </div>
                <div className='flex gap-2 items-center' >
                    <FaEye></FaEye>
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;