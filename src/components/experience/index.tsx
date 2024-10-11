import React from 'react'

export const Experience = () => {
    return (
        <div className='flex flex-col gap-y-5 w-full'>
            <h3 className='text-[30px] font-semibold text-lime-400 text-left'>
                {'Experience'} <span className='text-white'>{'( )'}</span>
            </h3>

            <div className='flex flex-col justify-center items-center gap-10 relative w-full'>

                <div className='w-0.5 h-full bg-lime-500 absolute bottom-0 z-0'></div>

                <div className='flex flex-row justify-center items-center gap-16 w-full'>

                    <div className='flex justify-between items-center flex-row gap-2 w-full bg-stone-500 rounded-md px-4 py-4 shadow-lg'>
                        <div className='flex items-start flex-col gap-2'>
                            <h2 className="text-[22px] font-extrabold cursor-pointer">Front-end developer</h2>
                            <h4 className="text-[16px] font-bold">Crayond digital Pvt Ltd, Chennai</h4>
                            <p className="text-[14px]">
                                Developed responsive web applications using React.js, achieving significant
                                improvements in performance and user experience.
                                Implemented UI/UX designs and prototypes, focusing on usability and
                                accessibility standards.
                            </p>
                            <a href='https://www.crayond.com' target='_blank'>
                                <button className="flex justify-center items-center p-1 rounded-lg bg-gradient-to-b from-lime-500 to-white mt-2">
                                    <div className="flex justify-center items-center gap-2 rounded-md bg-black px-3 py-2">
                                        <p className="text-[18px] font-medium cursor-pointer">Go to website</p>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className='h-6 w-12 rounded-full border-2 border-lime-500 bg-black z-10'></div>

                    <div className='flex justify-start items-center flex-row gap-2 w-full rounded-md px-4 py-4 shadow-lg'>
                        <h3 className="text-[18px] text-lime-500 font-semibold">Sep 2022 - Present</h3>
                    </div>

                </div>

                <div className='flex flex-row justify-center items-center gap-16 w-full'>


                    <div className='flex justify-end items-center flex-row gap-2 w-full rounded-md px-4 py-4 shadow-lg'>
                        <h3 className="text-[18px] text-lime-500 font-semibold cursor-pointer">Mar 2022 - Aug 2022</h3>
                    </div>

                    <div className='h-6 w-12 rounded-full border-2 border-lime-500 bg-black z-10'></div>

                    <div className='flex justify-between items-center flex-row gap-2 w-full bg-stone-500 rounded-md px-4 py-4 shadow-lg'>
                        <div className='flex items-start flex-col gap-2'>
                            <h2 className="text-[22px] font-extrabold cursor-pointer">Front-end developer</h2>
                            <h4 className="text-[16px] font-bold">Dorustree digital Pvt Ltd, Trichy.</h4>
                            <p className="text-[14px]">
                                Utilize React JS, JavaScript, HTML, and CSS to build interactive and dynamic
                                user interfaces
                                Develop and implement responsive web interfaces using HTML, CSS, Bootstrap,
                                and JavaScript, ensuring cross-browser compatibility and mobile optimization.
                            </p>
                            <a href='https://dorustree.com' target='_blank'>
                                <button className="flex justify-center items-center p-1 rounded-lg bg-gradient-to-b from-lime-500 to-white mt-2">
                                    <div className="flex justify-center items-center gap-2 rounded-md bg-black px-3 py-2">
                                        <p className="text-[18px] font-medium cursor-pointer">Go to website</p>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-16 w-full'>

                    <div className='flex justify-between items-center flex-row gap-2 w-full bg-stone-500 rounded-md px-4 py-4 shadow-lg'>
                        <div className='flex items-start flex-col gap-2'>
                            <h2 className="text-[22px] font-extrabold cursor-pointer">Process associate</h2>
                            <h4 className="text-[16px] font-bold">Omega Healthcare, Trichy.</h4>
                            <p className="text-[14px]">
                                Processing medical data, Providing customer service,
                                and Communicating with others.
                                Updating patient demographic information, Verifying patient data in medical
                                claims, Entering charges, and posting payments in software.
                                Good typing skills, Effective communication skills, and Preferred experience in
                                medical billing {'(payment posting)'}.
                            </p>
                            <a href='https://www.omegahms.com' target='_blank'>
                                <button className="flex justify-center items-center p-1 rounded-lg bg-gradient-to-b from-lime-500 to-white mt-2">
                                    <div className="flex justify-center items-center gap-2 rounded-md bg-black px-3 py-2">
                                        <p className="text-[18px] font-medium cursor-pointer">Go to website</p>
                                    </div>
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className='h-6 w-12 rounded-full border-2 border-lime-500 bg-black z-10'></div>

                    <div className='flex justify-start items-center flex-row gap-2 w-full rounded-md px-4 py-4 shadow-lg'>
                        <h3 className="text-[18px] text-lime-500 font-semibold cursor-pointer">Jul 2021 - Feb 2022</h3>
                    </div>
                </div>

            </div>
        </div >
    )
}