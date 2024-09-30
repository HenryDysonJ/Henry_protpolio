import BootstrapIcon from '@/app/assets/boostrap'
import CssIcon from '@/app/assets/cssIcon'
import { GithubLogo } from '@/app/assets/github'
import { GitLabIcon } from '@/app/assets/gitLab'
import HtmlIcon from '@/app/assets/html'
import { JsIcon } from '@/app/assets/javascriptIcon'
import MaterialUiIcon from '@/app/assets/materialUI_icon'
import NextjsIcon from '@/app/assets/nextjs'
import ReactJSIcon from '@/app/assets/reactjs'
import ReduxIcon from '@/app/assets/redux'
import SassIcon from '@/app/assets/sass'
import StorybookIcon from '@/app/assets/storybook'
import StyledComponents from '@/app/assets/styledComponents'
import TailwindIcon from '@/app/assets/tailwind'
import { TypeScriptIcons } from '@/app/assets/typescript'
import ZustandIcon from '@/app/assets/zustand'
import React from 'react'

const CardList = ({ bgColor, title, icon, }: { bgColor: string, title: string, icon: React.ReactNode }) => {
    return (
        <div className='grid place-items-center rounded-md h-36 w-40 bg-white overflow-hidden'>
            <p className='text-[14px] text-center pt-2 font-semibold h-full w-full' style={{ backgroundColor: bgColor }}>{title}</p>
            <div className=''>{icon}</div>
        </div>
    )
}

const Skills = () => {
    return (
        <div className='grid place-items-center h-1/2 px-24 bg-black'>
            <div className='flex justify-between items-center flex-row flex-wrap gap-4 w-full'>
                <CardList icon={<HtmlIcon />} title={'HTML5'} bgColor="#E44D26" />
                <CardList icon={<CssIcon />} title={'CSS'} bgColor="#264DE4" />
                <CardList icon={<JsIcon />} title={'Javascript'} bgColor="#f7df1e" />
                <CardList icon={<ReactJSIcon />} title={'React Js'} bgColor="#00d8ff" />
                <CardList icon={<ReduxIcon />} title={'Redux'} bgColor="#764ABC" />
                <CardList icon={<NextjsIcon />} title={'Next Js'} bgColor="#000" />
                <CardList icon={<TypeScriptIcons />} title={'Typescript'} bgColor="#3178c6" />
                <CardList icon={<SassIcon />} title={'Sass'} bgColor="#f06292" />
                <CardList icon={<BootstrapIcon />} title={'Bootstrap'} bgColor="#7c4dff" />
                <CardList icon={<MaterialUiIcon />} title={'MUI'} bgColor='#0288d1' />
                <CardList icon={<TailwindIcon />} title={'Tailwind css'} bgColor="#009bb8" />
                <CardList icon={<StorybookIcon />} title={'Storybook'} bgColor="#ff4785" />
                <CardList icon={<ZustandIcon />} title={'Zustand'} bgColor="#50273A" />
                <CardList icon={<GithubLogo />} title={'GitHub'} bgColor="#000000" />
                <CardList icon={<GitLabIcon />} title={'GitLab'} bgColor={"#ff7043"} />
                <CardList icon={<StyledComponents />} title={'Styled component'} bgColor={"#ffcebf"} />
            </div>
        </div>
    )
}

export default Skills