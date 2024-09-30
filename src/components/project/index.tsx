import React from 'react'

const CardList = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
    return (
        <div className='grid place-items-center rounded-md h-40 w-44 bg-lime-900 overflow-hidden cursor-pointer hover:border border-lime-300'>
            <p className='text-[14px] text-center pt-2 font-semibold h-full w-full'>{title}</p>
            <div className=''>{icon}</div>
        </div>
    )
}

export const Projects = () => {
    return (
        <div className='grid place-items-center h-96 px-20 bg-gradient-to-r from-black to-zinc-700'>
            <div className='flex flex-row gap-4'>
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
            </div>
        </div>
    )
}
