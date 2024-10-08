import AboutMe from "@/components/about_me";
import { ConductMe } from "@/components/conduct_me";
import { Experience } from "@/components/experience";
import { TopNavBar } from "@/components/navbar";
import { ProfileInfo } from "@/components/profile_Info";
import { Projects } from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full h-full">
        <div className="fixed z-10 w-full">
          <TopNavBar />
        </div>
        <div className='flex justify-center items-center px-24 py-16 bg-gradient-to-r from-black to-zinc-700 max-lg:px-6 lg:h-[34%]'>
          <ProfileInfo />
        </div>

        <div className='flex justify-center items-center px-20 py-16 max-lg:px-6 bg-gradient-to-r from-black to-zinc-600'>
          <AboutMe />
        </div>

        <div className='flex justify-center items-center px-20 py-16 bg-black max-lg:px-6'>
          <Skills />
        </div>

        <div className='flex justify-start items-center h-96 px-20 bg-gradient-to-r from-black to-zinc-600 max-lg:px-6 max-lg:w-full'>
          <Projects />
        </div>

        <div className='flex justify-center items-start bg-black px-20 py-16 max-lg:px-6'>
          <Experience />
        </div>

        <div className='flex justify-center items-center h-[20%] px-20 bg-gradient-to-r from-black to-zinc-600'>
          <ConductMe/>
        </div>

        <div className='flex justify-center items-center h-1/2 px-20 bg-black max-lg:px-6'>
          footer
        </div>
      </main>
    </div>
  );
}
