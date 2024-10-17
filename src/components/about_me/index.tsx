/* eslint-disable react/no-unescaped-entities */
import { DownloadIcon } from '@/app/assets/download'
import FragmentIcon from '@/app/assets/fragment'

function AboutMe() {
  return (
    <div className='flex justify-between items-center flex-row gap-12 w-full max-sm:flex-col'>
      
      <div className='grid place-items-normal gap-4 w-full'>
        <h3 className='text-[30px] font-semibold text-lime-400 text-left'>{'AboutMe'} <span className='text-white'>{'( )'}</span></h3>
        <p>Hi There, I'm Henry and i am Front-End Web Developer. It's been 2 years, I'm working as web developer.
          I have developed many website and also provided my services to college students by getting their projects ready
          ASAP as a freelancer I have been part of some very good web design projects.
        </p>
      </div>

      <div className='grid place-items-normal w-full'>
        <div className='flex items-start flex-col gap-4 px-10 w-full max-sm:px-0'>
          <div className='flex justify-between items-center flex-row gap-2 w-full bg-stone-500 rounded-md px-4 py-4 shadow-lg'>
            <div className='flex items-start flex-col gap-2'>
              <span className="text-[16px] font-medium cursor-pointer">{'Front end developer'}</span>
              <a className="underline" href="#">
                <span className="text-[14px] font-medium cursor-pointer">{'Projects'}</span>
              </a>
            </div>
            <span className="cursor-pointer"><FragmentIcon /></span>
          </div>
      
          <div className='flex justify-center items-center flex-row gap-2 w-full rounded-md px-4 py-4'>
            <a href='/henry_2.png' download='Henry_resume' className="flex justify-center items-center p-1 rounded-lg bg-gradient-to-b from-lime-500 to-white">
              <div className="flex justify-center items-center gap-2 rounded-md bg-black px-3 py-2">
                <DownloadIcon /> <span className="text-[18px] font-medium cursor-pointer">Resume CV</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutMe