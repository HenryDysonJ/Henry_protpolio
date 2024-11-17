import ProfileIcon from '@/app/assets/profileIcon'
import React from 'react'
import Image from 'next/image'
import Profile from '@/app/assets/henry_1.png'
import ReactJSIcon from '@/app/assets/reactjs'
import { TypeScriptIcon } from '@/app/assets/typescript'
import { JavascriptIcon } from '@/app/assets/javascriptIcon'

export const ProfileInfo = () => {
    return (
        <div className='flex justify-between items-center flex-row gap-12 w-full overflow-hidden max-sm:flex-col-reverse max-sm:pt-8 max-sm:gap-4'>
            <div className='grid place-items-normal w-full'>
                <h4 className='text-lg font-medium text-white mb-2'>Hello, i am</h4>
                <h1 className='text-5xl font-bold text-lime-400 mb-4'>{'< Henry'}<br />{'Dyson J />'}</h1>
                <h3 className='text-2xl font-semibold text-white mb-4'>FRONT END DEVELOPER</h3>
                <div className='flex flex-wrap items-center flex-row gap-12 max-sm:gap-8 w-full'>
                    <div className='flex items-center flex-row gap-2'>
                        <span className="text-5xl font-medium text-gray-400 cursor-pointer">2</span>
                        <span className="text-sm font-medium text-gray-400  cursor-pointer">{'YEARS OF'}<br />{'EXPERIENCE'}</span>
                    </div>
                    <div className='flex items-center flex-row gap-2'>
                        <span className="text-5xl font-medium text-gray-400 cursor-pointer">6</span>
                        <span className="text-sm font-medium text-gray-400 cursor-pointer">{'PROJECTS COMPLETED'}<br />{'AROUND THE WORLD'}</span>
                    </div>
                </div>
            </div>
            <div className='grid place-items-center w-full'>
                <div className="relative">
                    <ProfileIcon />
                    <Image
                        src={Profile}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                        className="my_profile_img absolute top-16 left-16 transition-all duration-300"
                    />
                    <div className="absolute left-8 bottom-20 max-sm:left-0 p-2 rounded-full bg-neutral-700 grid place-items-center transition-all duration-300">
                        <ReactJSIcon />
                    </div>
                    <div className="absolute right-12 bottom-20 max-sm:right-4 p-3 rounded-full bg-neutral-700 grid place-items-center transition-all duration-300">
                        <TypeScriptIcon />
                    </div>
                    <div className="absolute top-10 right-16 max-sm:right-4 p-3 rounded-full bg-neutral-700 grid place-items-center transition-all duration-300">
                        <JavascriptIcon />
                    </div>
                </div>

            </div>
        </div>
    )
}
