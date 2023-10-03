import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const NewsBar = () => {
    const [news, setNews] = useState([])

    useEffect(()=> {
        const fetchFunction = async () => {
            const response = await fetch('news.json');
            const data = await response.json();
            setNews(data);

        }
        fetchFunction();
    }, [])


    const newsTitles = [];
    news.map(item => newsTitles.push(item.title));
    const newsTitleString = newsTitles.join("..., ");

  return (
    <div>
      <div className="max-w-[1140px] mx-auto flex p-4 bg-[#F3F3F3]">
        <button className="bg-[#D72050] text-xl font-semibold px-6 py-2 text-white">
          Latest
        </button>
        <Marquee className="text-lg font-semibold">
          {newsTitleString}
        </Marquee>
      </div>
    </div>
  );
};

export default NewsBar;
