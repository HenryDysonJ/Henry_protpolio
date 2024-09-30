import ProfileIcon from '@/app/assets/profileIcon'
import React from 'react'
import Image from 'next/image'
import Profile from './henry_1.png'
import ReactJSIcon from '@/app/assets/reactjs'
import { TypeScriptIcon } from '@/app/assets/typescript'
import { JavascriptIcon } from '@/app/assets/javascriptIcon'

export const ProfileInfo = () => {
    return (
        <div className='grid place-items-center h-1/2 px-20 bg-gradient-to-r from-black to-zinc-700'>
            <div className='flex justify-between items-center flex-row gap-12 w-full'>
                <div className='grid place-items-normal w-full'>
                    <h4 className='text-[24px] font-medium mb-2'>Hello, i am</h4>
                    <h1 className='text-[44px] font-bold text-lime-400 mb-4'>{'< Henry'}<br />{'Dyson J />'}</h1>
                    <h3 className='text-[30px] font-semibold mb-4'>FRONT END DEVELOPER</h3>
                    <div className='flex items-center flex-row gap-12 w-full'>
                        <div className='flex items-center flex-row gap-2'>
                            <span className="text-[48px] font-medium cursor-pointer">2</span>
                            <span className="text-[14px] font-medium cursor-pointer">{'YEARS OF'}<br />{'EXPERIENCE'}</span>
                        </div>
                        <div className='flex items-center flex-row gap-2'>
                            <span className="text-[48px] font-medium cursor-pointer">10</span>
                            <span className="text-[14px] font-medium cursor-pointer">{'PROJECTS COMPLETED'}<br />{'AROUND THE WORLD'}</span>
                        </div>
                    </div>
                </div>
                <div className='grid place-items-center w-full relative'>
                    <ProfileIcon />
                    <Image
                        src={Profile}
                        width={300}
                        height={300}
                        alt="Picture of the author"
                        className='absolute top-16'
                    />
                    <div className='absolute left-32 bottom-20 h-28 w-28 rounded-full bg-neutral-700 grid place-items-center '><ReactJSIcon /></div>
                    <div className='absolute right-36 bottom-20 h-20 w-20 rounded-full bg-neutral-700 grid place-items-center '><TypeScriptIcon /></div>
                    <div className='absolute top-14 right-36 h-20 w-20 rounded-full bg-neutral-700 grid place-items-center '><JavascriptIcon /></div>
                </div>
            </div>
        </div>
    )
}
