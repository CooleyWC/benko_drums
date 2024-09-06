import React from 'react';
import {BriefcaseIcon} from '@heroicons/react/24/outline'
import { LiaDrumSolid } from "react-icons/lia";
import {AcademicCapIcon} from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';

function CareerList() {

    let navigate = useNavigate();

    return (
        <>
        <div className='max-w-[1600px] m-auto grid grid-cols-1 md:grid-cols-3 place-items-center pt-5 pb-11'>
            <div className=' col-span-1 text-[#f5f3f4] flex flex-col items-center mb-8'>
                <BriefcaseIcon className='size-14 text-[#e5383b] mt-10 mb-3 transition delay-150 hover:text-gray-500 ease-in-out'/>
                <h1 className='mb-4 text-2xl'>Business Owner</h1>
                <p className='text-center px-5 pb-5 leading-relaxed'>Tom is the owner of <strong>The Rhythm Messengers</strong> - Chicago-based Drumming and Entertainment company.</p>
                <a href='https://www.rhythmmessengers.com'>
                    <button 
                        className='text-white border-2 transition ease-in-out delay-150 hover:text-[#e5383b] py-2 px-4 rounded transform hover:scale-105 hover:border-3 hover:border-[#e5383b]'
                    >
                        Visit the Rhythm Messengers Website
                    </button>
                </a>
            </div>
            <div className='col-span-1 text-[#f5f3f4] flex flex-col items-center mb-5'>
                <LiaDrumSolid className='size-16 text-[#e5383b] mt-1 mb-2 transition delay-150 hover:text-gray-500 ease-in-out'/>
                <h1 className='mb-4 text-2xl'>Drummer | Composer</h1>
                <p className='text-center px-5 pb-5 leading-relaxed'>Tom plays drums in the Blue Man Group Chicago.</p>
                <a href='https://linktr.ee/tombenko'>
                    <button 
                         className='text-white border-2 transition ease-in-out delay-150 hover:text-[#e5383b] py-2 px-4 rounded transform hover:scale-105 hover:border-3 hover:border-[#e5383b]'
                    >
                        Check Out Tom's Drumming
                    </button>
                </a>
            </div>
            <div className='col-span-1 text-[#f5f3f4] flex flex-col items-center mb-5'>
                <AcademicCapIcon className='size-14 text-[#e5383b] mt-7 mb-2 transition delay-150 hover:text-gray-500 ease-in-out'/>
                <h1 className='mb-4 text-2xl'>Educator</h1>
                <p className='text-center px-10 pb-5 leading-relaxed'>Tom is the Percussion Director at Highland Park High School, and New Trier High School.</p>
                <a>
                    <button 
                        onClick={()=>navigate('/contact')} 
                        className='text-white border-2 transition ease-in-out delay-150 hover:text-[#e5383b] py-2 px-4 rounded transform hover:scale-105 hover:border-3 hover:border-[#e5383b]'
                    >
                        Contact Tom for Clinic Info
                    </button>
                </a>
            </div>
        </div>
        </>
    );
}

export default CareerList;