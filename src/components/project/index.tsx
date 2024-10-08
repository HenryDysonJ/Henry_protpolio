import React from 'react'

const CardList = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
    return (
        <div className='grid place-items-center rounded-md h-40 min-w-44 bg-lime-900 overflow-hidden cursor-pointer hover:border border-lime-300'>
            <p className='text-[14px] text-center pt-2 font-semibold h-full w-full'>{title}</p>
            <div className=''>{icon}</div>
        </div>
    )
}

export const Projects = () => {
    return (
        <div className='flex flex-col gap-5'>
            <h3 className='text-[30px] font-semibold text-lime-400 text-left'>
                {'Projects'} <span className='text-white'>{'( )'}</span>
            </h3>
            <div className='flex flex-row justify-center gap-4 max-w-[88vw] overflow-x-scroll'>
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
                <CardList icon={<>Hii</>} title='Henry' />
            </div>
        </div>


    )
}
