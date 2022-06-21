import React from 'react';
import TEAI from '../assets/logoteai(n1).png'

const Navbar = () => {
    return (
        <div className='w-full h-[80px] grid grid-cols-5'>
            <div className=' col-start-2 col-span-3  grow flex flex-row justify-between  items-center  bg-[#292a33]'>
                <div className=' col-start-2  ' >
                    <img  src={TEAI} alt="" style={{width: '40px'}} className='transition ease-in-out max-w-md hover:bg-sky-700 rounded-lg'/>
                </div>
                <div className='flex flex-row    '>
                    <ul className='text-white font-light text-xl font-lora '>
                            <il className='px-8 py-6 hover:text-gray-400  '>home</il>
                            <il className='px-8 py-6 hover:text-gray-400  '>contact</il>
                            <il className='px-8 py-6 hover:text-gray-400  '>projects</il>
                            <il className='px-8 py-6 hover:text-gray-400  pr-[-4] '>about</il>
                    </ul>
                </div>
            
                
            </div>
        </div>
    );
};

export default Navbar;