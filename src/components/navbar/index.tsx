'use client'

import ClosedIcon from "@/app/assets/closed";
import { EmailIcon } from "@/app/assets/email";
import { GithubIcon } from "@/app/assets/github";
import { LinkedinIcon } from "@/app/assets/linkedIn";
import MenuIcon from "@/app/assets/menu";
import { useState } from "react";
import { SidebarDrawer } from "../drawer";

interface TopNavBarPro {
    handleClickAbout: (id: string) => void
    handleClickSkills: (id: string) => void
    handleClickProjects: (id: string) => void
    handleClickHome: (id: string) => void
    handleClickConduct: (id: string) => void
}
export const TopNavBar = (props: TopNavBarPro) => {
    const { handleClickHome, handleClickAbout, handleClickProjects, handleClickSkills ,handleClickConduct } = props;

    const [open, setOpen] = useState(false)
    return (
        <div className="nav grid grid-cols-3 gap-4 py-4 px-20 bg-gradient-to-r from-black to-zinc-800 border-b border-b-slate-800 max-lg:grid-cols-2 max-lg:px-6">
            <a onClick={() => handleClickHome('1')} className="" href="#">
                <span className="text-gray-400 text-4xl max-lg:text-2xl font-bold cursor-pointer">Henry</span>
                <span className="text-4xl font-bold max-lg:text-2xl cursor-pointer"> Dyson J</span>
            </a>

            <div className="flex justify-center items-center gap-8 max-lg:hidden">
                <a onClick={() => handleClickAbout('2')} className="text-[18px] font-medium cursor-pointer">About</a>
                <a onClick={() => handleClickSkills('3')} className="text-[18px] font-medium cursor-pointer">Skill</a>
                <a onClick={() => handleClickProjects('4')} className="text-[18px] font-medium cursor-pointer">Projects</a>
            </div>

            <div className="flex justify-end items-center gap-8 max-lg:hidden">
                <a href="https://www.linkedin.com/in/henry-dyson-j-91b75519a" target="_blank" className="flex justify-center items-center gap-2"><LinkedinIcon /><span className="text-[18px] font-medium cursor-pointer">Linkedin</span></a>
                <a href="https://github.com/HenryDysonJ" target="_blank" className="flex justify-center items-center gap-2"><GithubIcon /><span className="text-[18px] font-medium cursor-pointer">Github</span></a>
                <button onClick={() => handleClickConduct('6')} className="flex justify-center items-center p-1 rounded-lg bg-gradient-to-b from-lime-500 to-white">
                    <div className="flex justify-center items-center gap-2 rounded-md bg-black px-3 py-2">
                        <EmailIcon /><span className="text-[18px] font-medium cursor-pointer">Conduct me</span>
                    </div>
                </button>
            </div>
            <div className="hidden max-lg:block max-lg:flex max-lg:justify-end items-center" onClick={() => setOpen(!open)}>{!open ? <MenuIcon /> : <ClosedIcon />}</div>
            <SidebarDrawer isOpen={open} setIsOpen={() => setOpen(!open)} />
        </div>
    );
}