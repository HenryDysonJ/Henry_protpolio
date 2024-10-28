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
            <div className="flex flex-row flex-wrap gap-6 justify-around items-center pb-8">
                <a onClick={() => handleClickHome('1')} className="text-[16px] font-medium cursor-pointer hover:text-lime-400">Home</a>
                <a onClick={() => handleClickAbout('2')} className="text-[16px] font-medium cursor-pointer hover:text-lime-400">About me</a>
                <a onClick={() => handleClickSkills('3')} className="text-[16px] font-medium cursor-pointer hover:text-lime-400">Skills</a>
                <a onClick={() => handleClickProjects('4')} className="text-[16px] font-medium cursor-pointer hover:text-lime-400">Projects</a>
                <a onClick={() => handleClickExperiance('5')} className="text-[16px] font-medium cursor-pointer hover:text-lime-400">Experience</a>
                <a onClick={() => handleClickConduct('6')} className="text-[16px] font-medium cursor-pointer hover:text-lime-400">Conduct us</a>
            </div>
            <div className='h-[2px] w-full bg-gray-500'></div>
            <div className="flex justify-center flex-row mt-8">
                <span className="text-[14px] font-medium text-lime-400">Created By <a href="#">HenryDyson</a> | © 2024 All Rights Reserved</span>
            </div>
        </>
    )
}
