import React from 'react';
import Persona from '../assets/personasentada.png'
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoTux } from "react-icons/io5";
import { IoLogoFirefox } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { IoServerOutline } from "react-icons/io5";



const Home = () => {
    return (
        <div className='w-full h-screen grid grid-cols-5  '>
            <div className='col-start-2 col-span-3 grid grid-rows-3 gap-4'>
                <div className=' flex flex-row  items-start justify-between text-white'>
                    <div className='flex flex-col shrink-0  gap-2 pt-[100px] mt-8 '>
                        <p className='text-4xl font-light text-sky-400'>Hello, my name is </p>
                        <h1 className='text-8xl font-lora text-gradient-to-r from-green-500 to-blue-500 '>Carlos Fonseca</h1>
                        <p className='text-xl font-light max-w-lg '>I'm a Front end Developer passionated in designing and building uniques web app experiencesess.</p>
                        <div className='flex flex-row my-4 items-center'>
                            <div className='pr-4'>
                                <button className=' bg-green-600 px-4 py-2 rounded-3xl hover:bg-green-500 text-white  '>Get started</button>
                            </div>
                            <button className='text-white hover:underline'>Contact Sales {'>'}</button>
                        </div>
                    </div>
                    <div className=' pt-16 grid grid-rows-1 shrink-0'>
                        <img src={Persona} alt="" style={{width: '460px' }} className="row-start-1 pt-[68px]" />
                    </div>  
                </div>
                <div className='flex flex-col  text-gray-500 justify-start '>
                    <div className=' pt-3 pb-10 w-[42%]'>
                        <button className=' rounded-3xl py-2 px-4 mt-10 border-[0.5px] hover:border-green-300'>Words words words word and more words $80</button>
                    </div>
                    <div className=' w-full h-[33%]  grid-rows-3 mb-2 '>
                        <div className='py-6 mt-14'>
                            <p className=' uppercase font-sans text-sm'>trusted by</p>
                        </div>
                        <div className='grid gap-6 grid-cols-4 grid-rows-2 '>
                            <div className='flex flex-row items-center '>
                                <IoLogoGithub size={'30px'}/>
                                <h3 className=' font-semibold pl-2'>Github</h3>
                            </div>
                            <div className='flex flex-row  items-center'>
                                <IoLogoReact size={'30px'} />
                                <h3 className=' font-semibold pl-2'>React</h3>
                            </div>
                            <div className='flex flex-row  items-center'>
                                <IoLogoTux size={'30px'}/>
                                <h3 className=' font-semibold pl-2'>Linux</h3>
                            </div>
                            <div className='flex flex-row items-center'>
                                <IoLogoFirefox size={'30px'}/>
                                <h3 className=' font-semibold pl-2'>Firefox</h3>
                            </div>
                            <div className='flex flex-row items-center'>
                                <IoLogoJavascript size={'30px'}/>
                                <h3 className=' font-semibold pl-2'>Javascript</h3>
                            </div>
                            <div className='flex flex-row items-center'>
                                <IoLogoLinkedin size={'30px'} />
                                <h3 className=' font-semibold pl-2'>Linkedin</h3>
                            </div>
                            <div className='flex flex-row items-center'>
                                <IoLogoNodejs size={'30px'}/>
                                <h3 className=' font-semibold pl-2'>Node.js</h3>
                            </div>
                            <div className='flex flex-row items-center'>
                                <IoServerOutline size={'30px'}/>
                                <h3 className=' font-semibold pl-2'>Server</h3>
                            </div>  
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    );
};

export default Home;