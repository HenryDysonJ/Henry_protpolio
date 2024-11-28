import React from 'react'
import EmblaCarousel from '../carosals'

export const Projects = () => {

    const slideData = [
        {
            title: "ChatMe Mobile App",
            demoLink: '',
            logo: '/chatMe.png',
            type:"mobile"
        },
        {
            title: "Food Order Mobile App",
            demoLink: '',
            logo: '/food_order.png',
            type:"mobile"
        },
        {
            title: "Invest vacation site",
            demoLink: 'https://famous-choux-726e9f.netlify.app',
            logo: '/xacro.png'
        },
        {
            title: "Security Service site",
            demoLink: 'https://security-website-eosin.vercel.app',
            logo: '/security.png'
        },
        {
            title: "React Crud Operation",
            description: "/react_crud.png",
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
        {
            title: "Library App",
            demoLink: 'https://library-site-orcin.vercel.app',
            logo: '/library.png'
        },
        {
            title: "Daily Boost CSS App",
            demoLink: 'https://daily-boost-skillsapp.vercel.app',
            logo: '/dailyBoost.png'
        },

    ]

    return (
        <div className='flex flex-col gap-5 w-full'>
            <h3 className='text-[30px] font-semibold text-lime-400 text-left'>{'My Works'}</h3>
            <div className='relative grid place-items-center'>
                <EmblaCarousel slides={slideData} options={{ loop: true }} />
            </div>
        </div>
    )
}
