import React from 'react'
import CustomButton from '../button'

export const Experience = () => {
    const experienceData = [
        {
            role: "Front-end developer",
            companyName: 'Crayond digital Pvt Ltd',
            duration: "Sep 2022 - Present",
            location: "Chennai",
            description: "Developed responsive web applications using React.js, achieving significant improvements in performance and user experience.Implemented UX designs and prototypes, focusing on usability and accessibility standards.",
            website: 'https://www.crayond.com'
        },
        {
            role: "Front-end developer",
            companyName: 'Dorustree digital Pvt Ltd',
            duration: "Mar 2022 - Aug 2022",
            location: "Trichy",
            description: "Utilize React JS, JavaScript, HTML, and CSS to build interactive and dynamic user interfaces Develop and implement responsive web interfaces using HTML, CSS, Bootstrap, and JavaScript, ensuring cross-browser compatibility and mobile optimization.",
            website: 'https://dorustree.com'
        },
        {
            role: "Process associate",
            companyName: 'Omega Healthcare',
            duration: "Jul 2021 - Feb 2022",
            location: "Trichy",
            description: "Processing medical data, Providing customer service,and Communicating with others.Updating patient demographic information, Verifying patient data in medical claims, Entering charges, and posting payments in software. Good typing skills, Effective communication skills, and Preferred experience in medical billing {'(payment posting)'}.",
            website: 'https://www.omegahms.com'
        },
    ]
    return (
        <div className='flex flex-col gap-y-5 w-full'>
            <h3 className='text-[30px] font-semibold text-lime-400 text-left'>{'Experience'}</h3>

            <div className='flex flex-col justify-center items-center gap-10 relative w-full'>

                <div className='w-0.5 h-full bg-lime-500 absolute bottom-0 z-0 max-sm:hidden'></div>

                {
                    experienceData?.length > 0 && experienceData?.map((item, i) => (
                        <div className={`flex justify-center items-center gap-10 max-sm:gap-2 w-full max-sm:flex-col-reverse ${i % 2 ? 'flex-row-reverse' : "flex-row"}`} key={i}>

                            <div className='flex justify-between items-center flex-row gap-2 w-full bg-stone-500 rounded-md px-4 py-4 shadow-lg'>
                                <div className='flex items-start flex-col gap-2'>
                                    <h2 className="text-[22px] font-extrabold cursor-pointer">{item?.role}</h2>
                                    <h4 className="text-[16px] font-bold">{`${item?.companyName}, ${item?.location}`}</h4>
                                    <p className="text-[14px]">{item?.description}</p>
                                    <a href={item?.website} target='_blank'>
                                        <CustomButton label={'Go to website'} onClick={() => undefined} />
                                    </a>
                                </div>
                            </div>

                            <div className='h-6 w-12 rounded-full border-2 border-lime-500 bg-black z-[6] max-sm:hidden'></div>

                            <div className='flex justify-start items-center flex-row gap-2 w-full rounded-md px-4 max-sm:pl-0 py-4 shadow-lg'>
                                <h3 className="text-[18px] text-lime-500 font-semibold">{item?.duration}</h3>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div >
    )
}