import React from 'react'
import EmblaCarousel from '../carosals'

export const Projects = () => {

    const slideData = [
        {
            title: "Responsive Static Page",
            demoLink: 'https://famous-choux-726e9f.netlify.app',
            logo: '/xacro.png'
        },
        {
            title: "React Crud Operation",
            description:"/react_crud.png",
            demoLink: 'https://lca-assismenet-ii-jzdp.vercel.app',
            logo: "/react_crudd.png"
        },
        {
            title: "NextJs Crud operation",
            demoLink: 'https://lca-assismenet-ii-jzdp.vercel.app',
            logo: '/nextjs_crudd.png'
        },
        {
            title: "NextJs Ecommerce App",
            demoLink: 'https://sunny-rolypoly-d57275.netlify.app',
            logo: '/e_commus.png'
        },
        
    ]

    return (
        <div className='flex flex-col gap-5 w-full'>
            <h3 className='text-[30px] font-semibold text-lime-400 text-left'>
                {'My Works'} <span className='text-white'>{'( )'}</span>
            </h3>
            <div className='relative grid place-items-center'>
                <EmblaCarousel slides={slideData} options={{ loop: true }} />
            </div>
        </div>
    )
}
