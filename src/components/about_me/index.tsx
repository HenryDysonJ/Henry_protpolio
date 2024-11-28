/* eslint-disable react/no-unescaped-entities */
import { DownloadIcon } from '@/app/assets/download'
import FragmentIcon from '@/app/assets/fragment'

function AboutMe() {
  return (
    <div className='flex justify-between items-center flex-row gap-12 w-full max-sm:flex-col'>

      <div className='grid place-items-normal gap-4 w-full'>
        <h3 className='text-[30px] font-semibold text-lime-400 text-left'>{'AboutMe'}</h3>
        <p className='text-white text-md font-normal'>
          Hi there! I’m Henry, a front-end developer with experienced specializing in creating dynamic and engaging web applications.
          My expertise lies in HTML, CSS, and JavaScript, with experience in frameworks like ReactJs.

          I’ve worked on a variety of projects, where I focused on enhancing user experience and improving load times.
          I enjoy tackling challenges and continuously seek ways to refine my skills and learn new technologies.

          I’m eager to bring my experience and enthusiasm to a new opportunity, and I’d love to discuss how I can contribute to your team!
        </p>
      </div>

      <div className='grid place-items-normal w-full'>
        <div className='flex items-start flex-col gap-4 px-10 w-full max-sm:px-0'>
          <div className='flex justify-between items-center flex-row gap-2 w-full bg-stone-500 rounded-md px-4 py-4 shadow-lg'>
            <div className='flex items-start flex-col gap-2'>
              <span className="text-[16px] font-medium text-white cursor-pointer">{'Front end developer'}</span>
              <a className="underline">
                <span className="text-[14px] text-lime-500 font-medium cursor-pointer">Projects</span>
              </a>
            </div>
            <span className="cursor-pointer"><FragmentIcon /></span>
          </div>

          <div className='flex justify-center items-center flex-row gap-2 w-full rounded-md px-4 py-4'>
            <a href='/Henry_Dyson_J.pdf' download='Henry_resume' className="flex justify-center items-center p-1 rounded-lg bg-gradient-to-b from-lime-500 to-white">
              <div className="flex justify-center items-center gap-2 rounded-md bg-black px-3 py-2">
                <DownloadIcon /> <span className="text-[18px] font-medium cursor-pointer">Resume CV</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutMe