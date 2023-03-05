import React from 'react'
import ddsLogo from '../../img/dds.png'
import { FcSearch } from "react-icons/fc";

const Header = () => {
    return (
        <div className='flex border-b w-full p-2 border-[#004077]' >
            <img src={ddsLogo} alt="DDS Logo" className='w-[89px] h-[89]' />
            <h1 className='font-bold flex items-center p-4'>
                1. Glostrup Gruppe
            </h1>
            <button className=' flex items-center'>
                <FcSearch className='text-3xl' />
            </button>
        </div >
    )
}

export default Header