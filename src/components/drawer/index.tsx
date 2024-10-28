
import ClosedIcon from '@/app/assets/closed';
import Profile from '@/app/assets/henry_1.png'
import { Button } from '@nextui-org/react';
import Image from 'next/image'

interface DrawerProp {
	isOpen: boolean;
	setIsOpen: () => void;
	handleClickAbout: (id: string) => void
	handleClickSkills: (id: string) => void
	handleClickProjects: (id: string) => void
	handleClickHome: (id: string) => void
	handleClickExperiance: (id: string) => void
	handleClickConduct: (id: string) => void
}

export const SidebarDrawer = (props: DrawerProp) => {
	const { isOpen, setIsOpen, handleClickHome, handleClickAbout, handleClickExperiance, handleClickProjects, handleClickSkills, handleClickConduct } = props;
	return (
		<div className={`fixed top-0 left-0 z-[12] flex justify-between flex-col bg-zinc-800 w-72 h-full transition-transform duration-300 ${isOpen ? 'translate-x-0 shadow-lg' : '-translate-x-72'}`}>
			<div>
				<div className='flex justify-between p-4 border-b border-lime-500 banner'>
					<div>
						<Image
							src={Profile}
							width={100}
							height={100}
							alt="Picture of the author"
							className='bg-slate-300 rounded-lg p-1'
						/>
						<h1 className='mt-2'>
							<span className="text-gray-400 text-xl font-bold cursor-pointer">Henry</span>
							<span className="text-xl font-bold cursor-pointer"> Dyson J</span>
						</h1>
						<h6 className='text-[12px] mt-2'>henrydysonaricjasan1310@gmail.com</h6>
					</div>
					<Button variant='solid' className='px-0 p-1 min-w-0 h-6 w-6' onClick={setIsOpen}>
						<ClosedIcon />
					</Button>
				</div>
				<div className='px-4 py-2 h-full flex flex-col'>
					<a onClick={() => handleClickHome('1')} className='py-2 hover:text-lime-300'>Home</a>
					<a onClick={() => handleClickAbout('2')} className='py-2 hover:text-lime-300'>About me</a>
					<a onClick={() => handleClickSkills('3')} className='py-2 hover:text-lime-300'>Skills</a>
					<a onClick={() => handleClickProjects('4')} className='py-2 hover:text-lime-300'>My Works</a>
					<a onClick={() => handleClickExperiance('5')} className='py-2 hover:text-lime-300'>Experiance</a>
					<a onClick={() => handleClickConduct('6')} className='py-2 hover:text-lime-300'>Conduct me</a>
				</div>
			</div>
			<div className='flex justify-between p-2 gap-4' ></div>
		</div>
	);
};