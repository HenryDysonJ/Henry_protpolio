import { FaceBookIcon } from '@/app/assets/facebook'
import { LinkedinIcons } from '@/app/assets/linkedIn'
import { TwitterIcon } from '@/app/assets/twiter'
import React from 'react'
interface FooterProb {
    handleClickAbout: (id: string) => void
    handleClickSkills: (id: string) => void
    handleClickProjects: (id: string) => void
    handleClickHome: (id: string) => void
    handleClickExperiance: (id: string) => void
    handleClickConduct: (id: string) => void
}

export const Footer = (props: FooterProb) => {
    const { handleClickHome, handleClickAbout, handleClickExperiance, handleClickProjects, handleClickSkills, handleClickConduct } = props;
    return (
        <>
            <div className="grid grid-cols-6 place-items-center py-8">
                <span onClick={() => handleClickHome('1')} className="text-[16px] font-medium cursor-pointer hover:text-lime-400">Home</span>
                <span onClick={() => handleClickAbout('2')} className="text-[16px] font-medium cursor-pointer hover:text-lime-400">About me</span>
                <span onClick={() => handleClickSkills('3')} className="text-[16px] font-medium cursor-pointer hover:text-lime-400">Skills</span>
                <span onClick={() => handleClickProjects('4')} className="text-[16px] font-medium cursor-pointer hover:text-lime-400">Projects</span>
                <span onClick={() => handleClickExperiance('5')} className="text-[16px] font-medium cursor-pointer hover:text-lime-400">Experience</span>
                <span onClick={() => handleClickConduct('6')} className="text-[16px] font-medium cursor-pointer hover:text-lime-400">Conduct us</span>
            </div>
            <div className='h-[2px] w-full bg-gray-500'></div>
            <div className="flex justify-center flex-row mt-2">
                <span className="text-[14px] font-medium text-lime-400">Created By <a href="#">HenryDyson</a> | © 2024 All Rights Reserved</span>
            </div>
        </>
    )
}
