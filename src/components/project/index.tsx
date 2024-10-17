import React from 'react'
import EmblaCarousel from '../carosals'

export const Projects = () => {

    return (
        <div className='flex flex-col gap-5 w-full'>
            <h3 className='text-[30px] font-semibold text-lime-400 text-left'>
                {'My Works'} <span className='text-white'>{'( )'}</span>
            </h3>
            <div className='relative flex flex-row justify-center gap-4 max-w-[88vw] overflow-x-scroll'>
                <EmblaCarousel slides={[1, 2, 3, 4, 5, 6]} options={{loop:true}} />
            </div>
        </div>


    )
}
