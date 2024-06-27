import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Previews.module.css';

import { useFetchBlogs } from '../../../Js/useFetchBlogs';

export default function Previews() {
    const { blogs, loading, error } = useFetchBlogs();
    const navigate = useNavigate();

    if (loading || error || !blogs || blogs.length === 0) {
        return null;
    }

    let latestPost = blogs.reduce((prev, current) =>
        (new Date(current.created_at) > new Date(prev.created_at)) ? current : prev
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex justify-between items-center mt-24 relative  ${styles.Card} border-2 border-gray rounded-[18px] pb-5 lg:border-none`}>
                <img src={`https://web-production-62359.up.railway.app${latestPost.image}`} alt="" className='absolute top-0 w-full h-[80%] object-cover rounded-[18px]' />
                <div className='flex flex-col pl-4 select-none bg-white absolute bottom-0 right-0 min-h-78 lg:w-[80%] pr-4 pb-4 rounded-none rounded-bl-[18px] rounded-br-[18px] lg:rounded-[18px] lg:rounded-tr-[18px] lg:rounded-tl-[18px]'>
                    <div className="flex mt-4 select-none">
                        <p className="font-bold cursor-pointer">{latestPost.category}</p>
                        <p className='smallParagraphText ml-4 text-text-grey select-none'>{latestPost.created_at}</p>
                    </div>
                    <h4 className='mt-2 font-bold'>{latestPost.title}</h4>
                    <p className='smallParagraphText mt-3'>{latestPost.short_description}</p>
                    <button onClick={() => navigate(`/blog/${latestPost.id}`)} className="bg-white w-[100%] h-[40px] items-center border-2 border-background rounded-lg mt-4 text-black hover:bg-blue-700 hover:text-white font-bold md:w-[125px]">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}
