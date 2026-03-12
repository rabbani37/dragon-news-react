import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUsOn = () => {
    return (
        <div>
            

            <h3 className='text-xl mt-7'>Find On Us</h3>
            <div className='mt-4'>
                <a>
                    <button className='hover:bg-gray-200 active:scale-99 flex gap-2 w-full rounded-tr rounded-tl  border border-gray-400 p-4'>
                        <div className='rounded-2xl p-1 bg-gray-300 text-blue-500'><FaFacebookF /></div>
                        <p className='font-medium text-gray-600'>Facebook</p>
                    </button>
                </a>
                <a>
                    <button className='hover:bg-gray-200 active:scale-99 flex gap-2 w-full border-t-0 border-b-0  border border-gray-400 p-4'>
                        <div className='rounded-2xl p-1 bg-gray-300 text-blue-500'><FaTwitter /></div>
                        <p className='font-medium text-gray-600'>Twitter</p>
                    </button>
                </a>
                <a>
                    <button className='hover:bg-gray-200 active:scale-99 flex gap-2 w-full rounded-br rounded-bl  border border-gray-400 p-4'>
                        <div className='rounded-2xl p-1 bg-gray-300 text-red-400'><FaInstagram /></div>
                        <p className='font-medium text-gray-600'>Instagram</p>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default FindUsOn;