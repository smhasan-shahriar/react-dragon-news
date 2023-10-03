import React from 'react';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from "../assets/qZone1.png"
import qzone2 from "../assets/qZone2.png"
import qzone3 from "../assets/qZone3.png"
import background from "../assets/bg.png"

const RightSideBar = () => {
    return (
        <div>
            {/* social login bar  */}
            <div>
                <h2 className='text-2xl font-bold'>Login With</h2>
                <button className="capitalize btn btn-outline w-full mt-5 border-blue-400 text-blue-400">
                    <FaGoogle />
                    Login with Google
                </button>
                <button className="capitalize btn btn-outline w-full mt-2">
                    <FaGithub />
                     Login with Github
                </button>
            </div>

            {/* social link bar  */}
            <div className='my-7'>
                <h2 className='text-2xl font-semibold'>Find Us On</h2>
                <div>
                    <div className='flex gap-3 p-4 items-center border rounded-t-lg'>
                        <FaFacebookF />
                        <p className='text-[#706F6F] font-medium'>Facebook</p>
                    </div>
                    <div className='flex gap-3 p-4 items-center'>
                        <FaTwitter />
                        <p className='text-[#706F6F] font-medium'>Twitter</p>
                    </div>
                    <div className='flex gap-3 p-4 items-center border rounded-b-lg'>
                        <FaInstagram />
                        <p className='text-[#706F6F] font-medium'>Instagram</p>
                    </div>
                </div>
            </div>

            {/* Q zone  */}
            <div className='bg-[#F3F3F3] p-4 space-y-5'>
                <h2 className='text-2xl font-semibold'>Q-Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
            {/* Ad Zone  */}
            <div className={`px-10 py-12 text-center space-y-5 bg-[url(${background})]`}>
                <h2 className='font-bold text-3xl'>Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='btn btn-secondary'>Learn More</button>
            </div>
        </div>
    );
};

export default RightSideBar;