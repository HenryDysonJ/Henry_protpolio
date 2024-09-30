/* eslint-disable react/no-unescaped-entities */
import BraceKetIcon from '@/app/assets/bracekets'
import FragmentIcon from '@/app/assets/fragment'
import React from 'react'

function AboutMe() {
  return (
    <div className='grid place-items-center  h-96  px-20 bg-gradient-to-r from-black to-zinc-700'>
      <div className='flex justify-between items-center flex-row gap-12 w-full'>
        <div className='grid place-items-normal w-full'>
          <h3 className='text-[30px] font-semibold text-lime-400 text-left'>{'AboutMe'} <span className='text-white'>{'( )'}</span></h3>
          <p>Hi There, I'm Vishal and i am Front-End Web Developer. It's been 2 years, I'm working as web developer. i have developed many website and also provided my services to college students by getting their projects ready ASAP as a freelancer I have been part of some very good web design projects.</p>
        </div>
        <div className='grid place-items-normal w-full'>
          <div className='flex items-start flex-col gap-2 px-10 w-full'>
            <div className='flex justify-between items-center flex-row gap-2 w-full bg-stone-500 rounded-md px-4 py-4'>
              <div className='flex items-start flex-col gap-2'>
                <span className="text-[16px] font-medium cursor-pointer">{'Front end developer'}</span>
                <a className="underline" href="#">
                <span className="text-[14px] font-medium cursor-pointer">{'Projects'}</span>
                </a>
              </div>
              <span className="cursor-pointer"><FragmentIcon /></span>
            </div>
            <div className='flex justify-between items-center flex-row gap-2 w-full bg-stone-500 rounded-md px-4 py-4'>
              <div className='flex items-start flex-col gap-2'>
                <span className="text-[16px] font-medium cursor-pointer">{'Freelancer'}</span>
                <a className="underline" href="#">
                <span className="text-[14px] font-medium cursor-pointer">{'Freelancer'}</span>
                </a>
              </div>
              <span className="cursor-pointer"><BraceKetIcon /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe